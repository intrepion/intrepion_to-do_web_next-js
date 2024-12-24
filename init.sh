# /init.sh

#!/bin/sh

app_name="intrepion-todo"

# Create a new Next.js app using TypeScript and app router
npx create-next-app@latest ${app_name} --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Move into the created directory
cd ${app_name}

# Install dependencies to create package-lock.json
npm install

# Install Playwright
npx playwright install --with-deps

echo "Next.js project initialized successfully!"
