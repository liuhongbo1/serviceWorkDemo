const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const Router = new require('koa-router');
const router= Router();
const app = new Koa()
 
//设置静态资源的路径 
const staticPath = './static'
 
app.use(static(
  path.join( __dirname,  staticPath)
))
router.get('/qw',(ctx,next)=>{
    ctx.response.body="中国"
})

app.use(router.routes())
app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})
 
app.listen(3333, () => {
  console.log('server is starting at port 3333')
})