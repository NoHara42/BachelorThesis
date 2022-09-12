FROM node:current-buster-slim as base

# ---- compile image -----------------------------------------------
FROM base AS compile-image

RUN apt-get -qy update && apt-get -qy install openssl

# A wildcard is used to ensure both package.json AND package-lock.json are copied
WORKDIR /
COPY yarn.lock ./
COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig.prod.json ./
COPY index.html ./
COPY .postcssrc.json ./
COPY tailwind.config.js ./
COPY vite.config.ts ./
COPY ./src /src
COPY ./types ./types
RUN mkdir ./dist

# Install app dependencies
RUN yarn install
RUN yarn run build:client
RUN yarn prisma generate


CMD ["yarn", "serve"]
