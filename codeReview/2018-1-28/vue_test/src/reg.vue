<template lang="html">
  <div >
    <cmpHead/>
    <div>
      <form class="" action="index.html" method="post">
        用户名：<input type="text" name="user" value=""/><br>
        密码：<input type="password" name="pass" value=""><br>
        <input type="submit" name="" value="注册">
      </form>
      <router-link :to="{ name: 'login'}">返回登录</router-link>
    </div>
    <cmpFoot/>
  </div>
</template>

<script>
import cmpHead from '@/components/cmp-head'
import cmpFoot from '@/components/cmp-foot'

export default {
  name: 'reg',
  components: {cmpHead, cmpFoot}
}
</script>

<style lang="css">
</style>
