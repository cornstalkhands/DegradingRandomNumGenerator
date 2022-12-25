FROM node:14-alpine AS build 
# Add a work directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# Cache and Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci 
# Copy app files
COPY . ./
# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:stable-alpine
# Copy built assets from builder
COPY --from=build /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 81
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
