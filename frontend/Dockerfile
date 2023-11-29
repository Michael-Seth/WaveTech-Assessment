FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm i -g npm@9.1.1 && \
    npm i -f && \
    find /app/node_modules/ ! -user root | xargs chown root:root
COPY . .

CMD ["yarn", "dev"]
