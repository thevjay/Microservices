FROM node

WORKDIR /developer/nodejs/api-gateway

COPY . .

RUN npm ci

CMD ["npm","run","dev"]


# > docker run -it --init -p 3> docker run -it --init -p 3001:3001 -v "${PWD}:/developer/nodejs/api-gateway" api-gateway:latest       
# >>


# PS C:\Users\jammu\Desktop\Projects\node\AirlineManagementProject\API_Gateway>                         docker volume create api-gateway-node-modules
# api-gateway-node-modules

# docker run -it --init -p 3005:3005`
#   -v "${PWD}:/developer/nodejs/api-gateway" `
#   -v api-gateway-node-modules:/developer/nodejs/api-gateway/node_modules `
#   api-gateway:latest
