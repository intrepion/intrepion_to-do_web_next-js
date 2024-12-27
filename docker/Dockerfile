# /docker/Dockerfile

# Development environment setup
FROM node:22-alpine
WORKDIR /app

# Install development dependencies and tools
RUN apk update && \
    apk add git

# Create a more robust entrypoint script that ensures dependencies are installed
RUN echo '#!/bin/bash\n\
echo "Checking for dependencies..."\n\
if [ ! -d "node_modules" ] || [ ! -f "node_modules/.package-lock.json" ]; then\n\
    echo "Installing dependencies..."\n\
    # Remove any existing node_modules to ensure clean install\n\
    rm -rf node_modules\n\
    # Install dependencies\n\
    npm install\n\
else\n\
    echo "Dependencies already installed"\n\
fi\n\
\n\
echo "Starting development server..."\n\
exec npm run dev\n\
' > /entrypoint.sh && chmod +x /entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["/entrypoint.sh"]
