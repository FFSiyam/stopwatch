FROM node:22-alpine3.18
WORKDIR /app
COPY ./package*.json .
RUN npm install --verbose
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["npm" , "start"]