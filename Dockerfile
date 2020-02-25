FROM node:latest
RUN npm i nodemon -g \
&& npm install @babel/core @babel/node -g \
npm install @babel/preset-env --save-dev \
&& echo "nodemon, babel => done";

