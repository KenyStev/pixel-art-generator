FROM node:10-alpine

RUN npm i serve -g

COPY build /app

EXPOSE 3000

ENTRYPOINT ["serve", "-p", "3000", "-s", "/app"]
