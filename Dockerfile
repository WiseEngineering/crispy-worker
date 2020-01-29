FROM node:12.13.1-alpine as development
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
# RUN yarn test


FROM node:12.13.1-alpine as production
WORKDIR /app
USER node
COPY --chown=node:node --from=development /app .
CMD ["yarn", "start"]
