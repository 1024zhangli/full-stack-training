<template lang="html">
  <div class="headbox">
    <ul>
      <li>首页</li>
      <li>新闻</li>
      <li>图片</li>
      <li>视频</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cmpHead'
}
</script>

<style lang="css">
.headbox {background-color: grey; width: 100%;}
div ul {list-style: none;overflow: hidden;}
ul li {float: left; width: 50px; color: white}
</style>
