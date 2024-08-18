# Use the official Node.js 16 image as a base
FROM node:16

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Command to run your app
CMD ["npm", "start"]
