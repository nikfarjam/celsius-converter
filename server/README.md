# Fahrenheit and celsius converter API server
This serivice is run on Nodejs.
# How to run
- On docker
```sh
docker build -t fc-converter .
docker run -p 8080:80 fc-converter
```
- By nodejs
```sh
npm install
npm start
```
> Services links

http://<server-ip>:8080/converter/fahrenheit/<degree>
  
http://<server-ip>:8080/converter/celsius/<degree>
