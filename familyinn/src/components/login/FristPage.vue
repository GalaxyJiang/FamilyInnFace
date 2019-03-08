<template>
  <div class="FristPage" id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <!-- 首页 客房图片 餐厅图片 服务 关于我们 登录 注册 -->
        <ul>
          <li>首页</li>
          <li>客房图片</li>
          <li>餐厅图片</li>
          <li @click="serviceTop">服务</li>
          <li>关于我们</li>
          <li>联系我们</li>
          <li>
            <a-dropdown placement="bottomCenter">
              <a class="ant-dropdown-link" href="#">
                登录 <a-icon type="down" />
              </a>
              <a-menu slot="overlay" @click="loginClick">
                <a-menu-item key="1">
                  <a-icon type="user" />用户登录
                </a-menu-item>
                <a-menu-item key="2">
                  <a-icon type="user" />管理员登录
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </li>
          <li>注册</li>
        </ul>
      </a-layout-header>
      <a-layout-content>
        <div class="content-roomimg">客房图片</div>
        <div class="content-eatimg">餐厅图片</div>
        <div class="content-service">
          <div class="service-header">我们的服务</div>
          <div class="service-content">
            <ul>
              <li><a-icon type="wifi" class="serviceimage"/>无线覆盖</li>
              <li><a-icon type="home" class="serviceimage"/>豪华客房</li>
              <li><a-icon type="coffee" class="serviceimage"/>餐厅 & 吧台</li>
              <li><a-icon type="phone" class="serviceimage"/>客房服务</li>
              <li><a-icon type="sound" class="serviceimage"/>24/7服务</li>
              <li><a-icon type="customer-service" class="serviceimage"/>娱乐游戏</li>
            </ul>
          </div>
        </div>
        <div class="content-aboutmine">关于我们</div>
        <div class="content-callme">联系我们</div>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          menuStyle: {
            color:"red",
            backgroundcolor: 'black'
          }

      }
    },
    methods: {
      loginClick({ key }) {
        if(`${key}` === "1") {
          this.$router.push("userlogin");
        } else {
          this.$router.push("adminlogin");
        }
      },
      serviceTop() {
        console.log(document.querySelector("content-service").offset().top);
        // var service_top = document.getElementsByClassName("content-service")[0].offset().top;
        document.body.animate({scrollTop:service_top},500);
      }
    }
  }
</script>


<style scoped>
  .FristPage {
    margin: 0;
    padding: 0;
  }
  #components-layout-demo-basic {
    text-align: center;
  }
  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: black;
    color: #fff;
  }
  
  /* 1、header */
  #components-layout-demo-basic .ant-layout-header>ul {
    list-style: none;
    width: auto;
    display: flex;
    display: -webkit-flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
  }
  #components-layout-demo-basic .ant-layout-header>ul>li {
    width: 100px;
    font-size: 20px;
  }
  .ant-layout-header>ul>li:hover {
    background-color:rgb(13, 115, 155)
  }
  .ant-dropdown-link {
    color: #fff
  }

  /* 2、content */
  #components-layout-demo-basic .ant-layout-content {
    color: #000;
  }
  .content-service {
    width: 100%;
    height: 800px;
    background-color: rgb(13, 115, 155);
  }
  .service-header {
    width: 100%;
    height: 20%;
    font-size: 50px;
  }
  .service-content {
    width: 100%;
    height: 80%;
  }
  .service-content> ul {
      width: 100%;
      height: 100%;
      display: -webkit-flex;
      display: flex;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      list-style: none;
      flex-wrap: wrap ;
      margin: 0;
      padding: 0;
  }
  .service-content>ul>li {
    font-size: 50px;
    width: 30%;
    height: 20%;
  }
  .serviceimage {
    color: #fff;
    font-size: 100px;
    margin-right: 20px;
  }


  /* 3、footer */
  #components-layout-demo-basic .ant-layout-footer {
    line-height: 1.5;
  }
</style>
