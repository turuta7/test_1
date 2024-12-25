# Base Node.js image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Compile TypeScript
RUN npm run build

# Expose the port (from environment variable)
EXPOSE ${PORT}

# Command to run the application
CMD ["npm", "run", "start"]
