#!/bin/bash

# /init.sh
# This script initializes the complete Next.js project structure

app_name="intrepion-to-do"
human_name="Intrepion To Do"

# Version specifications
version_next="15.1.3"
version_npm="11.0.0"

npm install --global npm@${version_npm}

yes | npx create-next-app@${version_next} ${app_name} --yes

# # Version specifications
# version_node="22.12.0"
# version_next="14.1.0"
# version_typescript="5.3.3"
# version_jest="29.7.0"
# version_playwright="1.41.1"
# version_eslint="8.56.0"
# version_prettier="3.2.4"
# version_tailwind="3.4.1"

# # Create the project directory and initialize Next.js
# # Pipe 'yes' to automatically accept the installation of create-next-app
# yes | npx create-next-app@${version_next} ${app_name} \
#   --typescript \
#   --tailwind \
#   --eslint \
#   --app \
#   --src-dir \
#   --import-alias "@/*" \
#   --yes

# cd ${app_name}

# # Initialize package.json with proper versions
# npm pkg set scripts.dev="next dev"
# npm pkg set scripts.build="next build"
# npm pkg set scripts.start="next start"
# npm pkg set scripts.lint="next lint"
# npm pkg set scripts.test="jest"
# npm pkg set scripts.test:watch="jest --watch"
# npm pkg set scripts.test:e2e="playwright test"
# npm pkg set scripts.format="prettier --write ."

# # Create project structure
# mkdir -p src/{components,hooks,lib,tests}/{__tests__,e2e}
# mkdir -p src/types

# # Install development dependencies
# npm install --save-dev \
#   @testing-library/jest-dom@6.1.5 \
#   @testing-library/react@14.1.2 \
#   @types/jest@${version_jest} \
#   @playwright/test@${version_playwright} \
#   jest@${version_jest} \
#   jest-environment-jsdom@${version_jest} \
#   @types/node@20.11.0 \
#   @types/react@18.2.48

# # Create base configuration files
# cat > jest.config.js << EOL
# const nextJest = require('next/jest')

# const createJestConfig = nextJest({
#   dir: './',
# })

# const customJestConfig = {
#   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
#   testEnvironment: 'jest-environment-jsdom',
#   moduleNameMapper: {
#     '^@/(.*)$': '<rootDir>/src/$1',
#   },
# }

# module.exports = createJestConfig(customJestConfig)
# EOL

# cat > jest.setup.js << EOL
# import '@testing-library/jest-dom'
# EOL

# cat > playwright.config.ts << EOL
# import { defineConfig } from '@playwright/test'

# export default defineConfig({
#   testDir: './src/tests/e2e',
#   fullyParallel: true,
#   forbidOnly: !!process.env.CI,
#   retries: process.env.CI ? 2 : 0,
#   workers: process.env.CI ? 1 : undefined,
#   use: {
#     baseURL: 'http://localhost:3000',
#     trace: 'on-first-retry',
#   },
#   projects: [
#     {
#       name: 'chromium',
#       use: { browserName: 'chromium' },
#     },
#   ],
#   webServer: {
#     command: 'npm run dev',
#     url: 'http://localhost:3000',
#     reuseExistingServer: !process.env.CI,
#   },
# })
# EOL

# # Create sample test files
# cat > src/tests/__tests__/Home.test.tsx << EOL
# import { render, screen } from '@testing-library/react'
# import Home from '@/app/page'

# describe('Home', () => {
#   it('renders a heading', () => {
#     render(<Home />)
#     const heading = screen.getByRole('heading', { level: 1 })
#     expect(heading).toBeInTheDocument()
#   })
# })
# EOL

# cat > src/tests/e2e/home.spec.ts << EOL
# import { test, expect } from '@playwright/test'

# test('has title', async ({ page }) => {
#   await page.goto('/')
#   await expect(page).toHaveTitle(/Intrepion To Do/)
# })
# EOL

# # Install Playwright browsers
# # Pipe 'yes' to automatically accept the installation of Playwright
# yes | npx playwright install --with-deps chromium

# # Format all files
# # Moved this to after development dependencies are installed
# npm run format

# echo "Project initialization complete! 🚀"
