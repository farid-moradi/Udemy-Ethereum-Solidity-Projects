FROM node:18-alpine

# Set environment variables
ENV NEXT_PUBLIC_CONTRACT_ADDRESS=0x3cd90F721eDC809713365Ca20Ef342c22e8f9880
ENV PRIVATE_KEY=0x83b5c617ad3fc497cc818f61f44adccfa7bbb2b36d128b35e16bdcbf6d1939f2
ENV API_KEY=ioHaSOwZLV4D4LA3uyd8XZ9qKscSeFc9
ENV ETHEREUM_URL=https://polygonzkevm-cardona.g.alchemy.com/v2/ioHaSOwZLV4D4LA3uyd8XZ9qKscSeFc9

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
