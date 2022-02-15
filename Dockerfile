FROM node:16.13.1-alpine

WORKDIR /araboza

RUN npm install yarn

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY next.config.js next-env.d.ts tsconfig.json .env ./

COPY src ./src

COPY public ./public

RUN yarn build

ENTRYPOINT [ "yarn", "start" ]