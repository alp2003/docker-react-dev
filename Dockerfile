FROM node:16-alpine as builder

WORKDIR /usr/frontend

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx

EXPOSE 80

COPY --from=builder /usr/frontend/build /usr/share/nginx/html

# CMD ["nginx", "-g", "daemon off;"]

# run:  docker run -p 8080:80 frontend-prod