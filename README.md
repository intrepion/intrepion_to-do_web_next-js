<!-- /README.md -->

# intrepion_to-do_web_next-js
intrepion To Do web app written using Next.js framework

# Intrepion To Do - Next.js Project

This project is a To Do application built with Next.js, set up for local development using Docker Compose and prepared for deployment to various cloud providers. The project uses TypeScript for type safety, includes comprehensive testing setups, and follows modern React development practices.

## Project Overview

The application is structured as a modern Next.js project with TypeScript support, incorporating best practices for testing, styling, and development workflow. It uses Docker for consistent development and deployment environments across different platforms.

## Prerequisites

Before starting, ensure you have these tools installed on your system:

- **Docker**: [Installation Guide](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Installation Guide](https://docs.docker.com/compose/install/)
- **Git**: [Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Project Structure

```
intrepion-to-do/
├── docker/                     # Docker configuration files
│   ├── Dockerfile             # Development environment
│   ├── Dockerfile.init        # Project initialization
│   └── Dockerfile.publish     # Production build
├── src/                       # Source code directory
│   ├── app/                   # Next.js app directory
│   ├── components/            # Reusable React components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions and helpers
│   ├── tests/                # Test files
│   │   ├── __tests__/       # Unit and component tests
│   │   └── e2e/             # End-to-end tests
│   └── types/               # TypeScript type definitions
├── .gitignore               # Git ignore configuration
├── docker-compose.yml       # Docker Compose configuration
├── init.sh                 # Project initialization script
├── jest.config.js         # Jest test configuration
├── jest.setup.js         # Jest setup file
├── next.config.js       # Next.js configuration
├── package.json        # Project dependencies and scripts
├── playwright.config.ts # Playwright test configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **Testing**:
  - Jest for unit testing
  - React Testing Library for component testing
  - Playwright for end-to-end testing
- **Development Environment**: Docker
- **Node Version**: 22.0.0

## Getting Started

### 1. Initialize the Project

Create the project structure and install dependencies:

```bash
docker compose run --rm nextjs-init
```

This command:
- Creates the Next.js project with TypeScript support
- Sets up the testing environment (Jest and Playwright)
- Installs all necessary dependencies
- Configures development tools (ESLint, Prettier)

### 2. Start Development Environment

Launch the development server with hot reloading:

```bash
docker compose up nextjs-dev
```

The application will be available at `http://localhost:3000`. Changes to your source files will automatically trigger a rebuild and refresh in the browser.

### 3. Running Tests

The project includes several types of tests that can be run in different ways:

#### Unit and Component Tests

Run Jest tests:
```bash
# Run tests once
docker compose run --rm nextjs-dev npm test

# Run tests in watch mode
docker compose run --rm nextjs-dev npm run test:watch
```

#### End-to-End Tests

Run Playwright tests:
```bash
docker compose run --rm nextjs-dev npm run test:e2e
```

### 4. Production Build

Build and run the production version locally:

```bash
docker compose up nextjs-prod
```

The production build will be available at `http://localhost:3000`.

### 5. Additional Commands

Format code using Prettier:
```bash
docker compose run --rm nextjs-dev npm run format
```

Run linting:
```bash
docker compose run --rm nextjs-dev npm run lint
```

### 6. Stop the Environment

To stop running containers:

```bash
docker compose down
```

## Project Customization

### Adding New Components

1. Create a new component in `src/components/`
2. Create corresponding test file in `src/components/__tests__/`
3. Import and use the component as needed

### Creating Custom Hooks

1. Add new hooks in `src/hooks/`
2. Create corresponding test file in `src/hooks/__tests__/`
3. Import and use the hook in your components

### Adding E2E Tests

1. Create new test files in `src/tests/e2e/`
2. Run the tests using the test:e2e script

## Best Practices

- Keep components small and focused on a single responsibility
- Write tests for all new features
- Use TypeScript types/interfaces for all props and state
- Follow the project's established coding style
- Use Tailwind CSS for styling
- Commit code regularly with clear commit messages

## Deployment

The project includes a production-ready Dockerfile (`Dockerfile.publish`) that creates an optimized build for deployment. The production image:

- Uses multi-stage builds to minimize the final image size
- Implements proper Node.js production settings
- Includes only the necessary files for running the application
- Configures the application for production use

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   - Stop any running applications on port 3000
   - Or modify the port in docker-compose.yml

2. **Node Modules Issues**
   - Remove the node_modules directory
   - Run `docker compose down`
   - Restart with `docker compose up nextjs-dev`

3. **Test Runner Issues**
   - Ensure all dependencies are installed
   - Try clearing Jest cache: `docker compose run --rm nextjs-dev npm test -- --clearCache`

### Getting Help

If you encounter any issues:
1. Check the error messages in the console
2. Review the Docker logs
3. Ensure all prerequisites are properly installed
4. Verify your Docker environment is functioning correctly

## License

This project is licensed under the MIT License - see the LICENSE file for details.
