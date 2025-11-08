# ---------------------------
# 1️⃣ BUILD STAGE
# ---------------------------
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Copy dependency files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the React app (Vite)
RUN npm run build


# ---------------------------
# 2️⃣ PRODUCTION STAGE
# ---------------------------
FROM node:22-alpine

WORKDIR /app

# Install 'serve' to host static build
RUN npm install -g serve

# Copy build output from previous stage
COPY --from=build /app/dist ./dist

# Expose the production port
EXPOSE 3000

# ---------------------------
# ✅ ENVIRONMENT CONFIGURATION
# ---------------------------

# Optional: allow dynamic backend API base URL via environment variable
# (if you later add .env logic in frontend)
ENV PORT=3000 \
    NODE_ENV=production

# Start the static file server
CMD ["serve", "-s", "dist", "-l", "3000"]












# # Build Stage

# FROM node:22-alpine AS build


# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# # PRODUCTION Stage


# FROM node:22-alpine

# WORKDIR /app

# RUN npm i -g serve

# ENV PATH="/usr/local/bin:$PATH"

# COPY --from=build /app/dist ./dist

# EXPOSE 3000

# CMD ["serve", "-s", "dist", "-l", "3000"]
