FROM nodesource/jessie:6.2.0

ENV NODE_ENV development
ENV SERVER_HOST 0.0.0.0
ENV SERVER_PORT 80

EXPOSE 80

ADD package.json package.json
RUN npm install

ADD . .
# RUN npm test
RUN npm run build

CMD ["npm", "start"]
