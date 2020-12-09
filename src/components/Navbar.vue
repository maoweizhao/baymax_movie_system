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
        <div class="search_box"> <Input search placeholder="" /></div>
        <div class="user">
        <Dropdown>
         <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="50" />
            <DropdownMenu slot="list">
            <DropdownItem>登录</DropdownItem>
            <DropdownItem>注册</DropdownItem>
            <DropdownItem>注销</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang='less' scoped>
@h:68px;
@100:100%;
.mixins {
    width: @100;
    height: @100;
}
.Navbar{
    display: flex;
    height: @h;
    background-color: #FE5447;
    justify-content: flex-start;
    color:#ffffff;
    .logo {
      flex: 0.2;
      height: @h;
      a {
      display: block;
      .mixins();
      background: url('../assets/logo.png') no-repeat;
      background-size: @100;
      }
    }
    .menu {
      flex: 0.4;
      height: @h;
      li {
        width: 20%;
        height: @h;
        line-height: @h;
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
    .search_box{
        line-height: @h;
        flex: 0.3;
        height: @h;
        padding: 0 80px;
    }
    .user {
        padding-left: 30px;
        line-height: @h;
        flex: 0.1;
        height: @h;
    }
}
</style>
