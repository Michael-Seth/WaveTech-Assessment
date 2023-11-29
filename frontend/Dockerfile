FROM node:18

COPY ./package.json /app/package.json
WORKDIR /app/


RUN npm i -g yarn && \
    yarn  && \
    find /app/node_modules/ ! -user root | xargs chown root:root



COPY . /app/



# Post install

RUN yarn run build


# execute start script

CMD ["yarn", "dev"]