# escape=`
FROM alpine
RUN apk update && `
	apk add --no-cache `
	nodejs `
	&& npm i npm@latest -g `
	&& node --version 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
