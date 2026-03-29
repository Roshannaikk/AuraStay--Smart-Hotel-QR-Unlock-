FROM node:18

WORKDIR /app

# Install build tools (IMPORTANT for sqlite)
RUN apt-get update && apt-get install -y python3 make g++

COPY package*.json ./

# Install dependencies and rebuild sqlite
RUN npm install --build-from-source

COPY . .

EXPOSE 3000

CMD ["node", "server/server.js"]