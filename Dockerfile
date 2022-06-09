# Create node image
FROM node:lts-alpine

# specify the workdir
WORKDIR /app

# copy the files
COPY . /app

# install dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

# run
CMD ["node", "index.js"]