FROM node:24.2-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

ARG NEXT_PUBLIC_API_URL=https://default-url.com

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]