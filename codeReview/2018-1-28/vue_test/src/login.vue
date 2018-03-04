<template lang="html">
  <div >
    <cmpHead/>
    <div>
      <form class="" action="localhost:8081/login" method="post">
        <span>用户名：</span><input type="text" name="user" value=""/><br>
        <span>密码：</span><input type="password" name="pass" value=""><br>
        <input type="submit" name="" value="登录">
      </form>
      <router-link :to="{ name: 'reg'}">去注册</router-link>
    </div>
    <cmpFoot/>
  </div>
</template>

<script>
import cmpHead from '@/components/cmp-head'
import cmpFoot from '@/components/cmp-foot'

export default {
  name: 'login',
  components: {cmpHead, cmpFoot}
}
</script>

<style lang="css">
</style>
