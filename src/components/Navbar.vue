<template>
    <div class='Navbar'>
        <div class="logo"><a href="javaScript:;"></a></div>
        <div class="menu">
            <ul>
                <li><a href="javaScript:;">电影</a></li>
                <li><a href="javaScript:;">电视剧</a></li>
                <li><a href="javaScript:;">动漫</a></li>
                <li><a href="javaScript:;">综艺</a></li>
                <li><a href="javaScript:;">纪录片</a></li>
            </ul>
        </div>
        <div class="search"> <Input search placeholder="搜索" /></div>
        <div class="user"><Avatar shape="square" icon="ios-person" size="large" /></div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang='less' scoped>
.Navbar{
    position:relative;
    width: 100%;
    height: 68px;
    background-color: #FE5447;
    color:#ffffff;
    .logo {
      float:left;
      width: 20%;
      height: 68px;
      a {
      display: block;
      height: 100%;
      width: 100%;
      background: url('../assets/logo.png') no-repeat;
      background-size: 100% 100%;
      }
    }
    .menu {
      float: left;
      width: 40%;
      height: 68px;
      li {
        width: 20%;
        height: 68px;
        line-height: 68px;
        text-align: center;
          float: left;
          a {
              color: #ffffff;
          }
      }
      li:hover{
          background-color: #64462E;
      }
    }
    .search {
        float:left;
        line-height: 68px;
        width: 20%;
        height: 68px;
    }
    .user {
      float:left;
      position:absolute;
      left: px;
      line-height: 68px;
      width: 20%;
      height: 68px;
    }
}
</style>
