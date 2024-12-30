#!/bin/bash

# /init.sh

# This script initializes the complete Next.js project structure with testing support

# Define project names and versions
app_name="intrepion-to-do-next-js"
human_name="intrepion To Do NextJS"

# Version specifications
version_next="15.1.3"
version_npm="11.0.0"

# Update npm to specified version
npm install --global npm@${version_npm}

# Create Next.js application
yes | npx create-next-app@${version_next} ${app_name} --yes

# Move into the project directory
cd ${app_name}

# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom

# Create jest.config.js with Next.js's recommended configuration
cat > jest.config.js << 'EOL'
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1'
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
EOL

# Create Jest setup file
cat > jest.setup.js << 'EOL'
import '@testing-library/jest-dom'
EOL

# Create test directory and example test
mkdir -p __tests__
cat > __tests__/page.test.tsx << 'EOL'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {
  it('renders the main page', () => {
    render(<Page />)
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })
})
EOL

# Update package.json scripts
node -e '
const fs = require("fs");
const package = require("./package.json");

// Add test scripts
package.scripts = {
  ...package.scripts,
  "test": "jest",
  "test:watch": "jest --watch"
};

fs.writeFileSync("package.json", JSON.stringify(package, null, 2));
'

# Return to parent directory
cd ..

echo "Project initialization complete with testing setup!"
