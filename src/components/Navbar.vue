<template>
  <div class="Navbar">
    <div class="logo"><a href="javaScript:;"></a></div>
    <div class="search_box">
      <input class="search_content" type="text" placeholder="" />
      <div class="search_btn">
        <span class="icon iconfont">&#xe62f;</span>
        搜索
      </div>
    </div>
    <div class="user">
      <Dropdown>
        <Avatar
          src="https://i.loli.net/2017/08/21/599a521472424.jpg"
          size="40"
        />
        <DropdownMenu slot="list">
          <DropdownItem>登录</DropdownItem>
          <DropdownItem>注册</DropdownItem>
          <DropdownItem>退出</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang='less' scoped>
@h: 68px;
.mixins {
  width: 100%;
  height: 100%;
}
.Navbar {
  min-width: 1125px;
  display: flex;
  height: @h;
  background-color: #000000;
  color: #ffffff;
  padding: 0 20px;
  .logo {
    flex: 0.2;
    height: @h;
    a {
      display: block;
      .mixins();
      background: url("../assets/logo.png") no-repeat;
      background-size: 180px @h;
    }
  }
  .search_box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0.6;
    height: @h;
    padding: 0 100px;
    .search_content {
      text-indent: 20px;
      width: 285px;
      height: 40px;
      border-radius: 40px 0 0 40px;
      background: #fff;
      transition: 0.3s linear;
      border: 2px solid #f15b20;
    }
    .search_content:hover {
      width: 300px;
    }
    .search_btn {
      width: 100px;
      height: 40px;
      border-radius: 0 40px 40px 0;
      border: 2px solid #f15b20;
      background-color: #f15b20;
      line-height: 40px;
      font-size: 15px;
      padding: 0 15px;
    }
    .search_btn:hover {
      background: #ff183e;
      cursor: pointer;
    }
  }
  .user {
    padding-left: 30px;
    line-height: @h;
    flex: 0.2;
    height: @h;
  }
}
</style>
