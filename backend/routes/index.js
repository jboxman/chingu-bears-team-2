const fs = require('fs');
const path = require('path');
const router = require('koa-router')();
const passport = require('koa-passport');

const debug = require('debug')('fcc-voting');

// Load React UI
router.get('/', async function(ctx, next) {
  ctx.type = 'html';
  ctx.body = fs.createReadStream(path.join(__dirname, '../views/index.html'));
});

module.exports = router;

