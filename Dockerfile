# Stage 1: Build the Next.js application
FROM node:16-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the app and build it
COPY . .
RUN npm run build

# Stage 2: Prepare the production image
FROM node:16-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# Copy package files and install only production dependencies
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

# Copy built assets and public folder from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD [npm, start]

