const router = require('../../libs/router');

router.on('/chg_pass', (req, res)=>{
  console.log('修改密码');

  res.end();
});

router.on('/chg_profile', (req, res)=>{
  console.log('修改个人信息');

  res.end();
});
