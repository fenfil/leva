cp ../shared/.env .env
yarn
yarn build
pm2 restart ecosystem.config.js
