# Use an official Node.js image as the base image
FROM node:20.9.0

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

COPY package*.json ./

# Install dependencies
RUN npm install

RUN npx prisma generate

# Expose the port the app runs on
EXPOSE 3001
# Command to run the application
CMD npm run dev
