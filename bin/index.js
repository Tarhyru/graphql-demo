const Koa = require('koa');
const { makeGraphqMiddleware } = require('../lib/graphql');
const app = new Koa();

app.use(makeGraphqMiddleware({
    path: '/api/query'
}));

app.listen({ port: 4001 }, () => {
    console.log(`ready at localhost:4001`);
});