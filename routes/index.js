const router = require('koa-router')()
const api = require('../controller/api');
router.get('/', async (ctx, next) => {
	await ctx.render('index', {
	title: 'Hello Koa 2!'
	})
})

router.get('/string', async (ctx, next) => {
	ctx.body = 'string';
})

router.get('/json', async (ctx, next) => {
	const data = await api.getData();
	ctx.body = JSON.stringify(data);
})

module.exports = router
