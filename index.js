const Koa = require('koa')
const app = new Koa()

app.use(async ctx=> {
  console.log(ctx)
  ctx.body = "hello world";
})
app.listen(3003)


