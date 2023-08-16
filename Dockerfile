FROM node:18-alpine

# Install necessary dependencies for Chrome and ChromeDriver
RUN apk update && apk add --no-cache \
    chromium \
    chromium-chromedriver \
    udev \
    ttf-freefont

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "dist/main.js" ]
