<template>
  <div class="FristPage" id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <!-- 首页 客房图片 餐厅图片 服务 关于我们 登录 注册 -->
        <ul>
          <li @click="scrollClick(1)">首页</li>
          <li @click="scrollClick(2)">服务</li>
          <li @click="scrollClick(3)">客房图片</li>
          <li @click="scrollClick(4)">餐厅图片</li>
          <li @click="scrollClick(5)">关于我们</li>
          <li @click="scrollClick(6)">联系我们</li>
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
        <!-- 服务 -->
        <div class="content-service">
          <div class="service-header">我们的服务</div>
          <div class="service-content">
            <ul>
              <li>
                <a-icon type="wifi" class="serviceimage"/>
                <span class="service-content-title">无线覆盖</span>
                <span class="service-content-explain">全店WIFI覆盖，即使身在异地也不会影响你的随时办公和视屏通话</span>
              </li>
              <li>
                <a-icon type="home" class="serviceimage"/>
                <span class="service-content-title">豪华客房</span>
                <span class="service-content-explain">全店WIFI覆盖，即使身在异地也不会影响你的随时办公和视屏通话</span>
              </li>
              <li>
                <a-icon type="coffee" class="serviceimage"/>
                <span class="service-content-title">餐厅 & 吧台</span>
                <span class="service-content-explain">全店WIFI覆盖，即使身在异地也不会影响你的随时办公和视屏通话</span>
              </li>
              <li>
                <a-icon type="phone" class="serviceimage"/>
                <span class="service-content-title">客房服务</span>
                <span class="service-content-explain">全店WIFI覆盖，即使身在异地也不会影响你的随时办公和视屏通话</span>
              </li>
              <li>
                <a-icon type="sound" class="serviceimage"/>
                <span class="service-content-title">24/7服务</span>
                <span class="service-content-explain">全店WIFI覆盖，即使身在异地也不会影响你的随时办公和视屏通话</span>
              </li>
              <li>
                <a-icon type="customer-service" class="serviceimage"/>
                <span class="service-content-title">娱乐游戏</span>
                <span class="service-content-explain">全店WIFI覆盖，即使身在异地也不会影响你的随时办公和视屏通话</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 客房 -->
        <div class="content-roomimg">
          <div class="roomimg-header">
            <span class="header-title">客房图片</span>
            <span class="header-explain">在这里，您可以欣赏到我们客栈的客房图片</span>
          </div>
          <div class="roomimg-content">
            <ul>
              <li><img src="../../assets/image/room1.jpg" alt=""></li>
              <li><img src="../../assets/image/room2.jpg" alt=""></li>
              <li><img src="../../assets/image/juhua.jpg" alt=""></li>
              <li><img src="../../assets/image/Koala.jpg" alt=""></li>
              <li><img src="../../assets/image/Jellyfish.jpg" alt=""></li>
              <li><img src="../../assets/image/Desert.jpg" alt=""></li>
              <li><img src="../../assets/image/Penguins.jpg" alt=""></li>
              <li><img src="../../assets/image/Tulips.jpg" alt=""></li>
            </ul>
          </div>
        </div>
        <a-divider></a-divider>
        <!-- 餐厅 -->
        <div class="content-eatimg">
          <div class="eatimg-header">
            <span class="header-title">餐厅图片</span>
            <span class="header-explain">在这里，您可以感受我们客栈的用餐环境和食物的诱惑</span>
          </div>
          <div class="eatimg-content">
            <ul>
              <li><img src="../../assets/image/room1.jpg" alt=""></li>
              <li><img src="../../assets/image/room2.jpg" alt=""></li>
              <li><img src="../../assets/image/juhua.jpg" alt=""></li>
              <li><img src="../../assets/image/Koala.jpg" alt=""></li>
              <li><img src="../../assets/image/Jellyfish.jpg" alt=""></li>
              <li><img src="../../assets/image/Desert.jpg" alt=""></li>
              <li><img src="../../assets/image/Penguins.jpg" alt=""></li>
              <li><img src="../../assets/image/Tulips.jpg" alt=""></li>
            </ul>
          </div>
        </div>
        <!-- 关于我们 -->
        <div class="content-aboutmine">
          <div class="aboutmine-header">
            <span class="header-title">关于我们</span>
            <span class="header-explain">在这里，您可以通过以下信息了解我们的客栈</span>
          </div>
          <div class="aboutmine-content">
            <div class="content-image">
              <img src="../../assets/image/room1.jpg" alt="">
            </div>
            <div class="content-text">
              <h1>我们客栈</h1>
              <a-divider></a-divider>
              <p>
                走走停停，在旅途中偶遇渔村客栈，下一站的幸福就在这里。这里是一个大家庭，我们会让您体会到家的温暖。
                愉人客栈，渔村客栈；感谢莅临，舒适美满。如居家般温馨，享快乐之旅！北海宜居人相忆，渔村宿客宾如归。
                暂时的渔家，一生的余想，给我一分信任，还你日日温馨，渔村之家，永远为每一位家人守候。
              </p>
              <br>
              <br>
              <p>我们为旅客提供了多种个性服务，大致为一下几条：</p>
              <ul>
                <li>走走停停，在旅途中偶遇渔村客栈，下一站的幸福就在</li>
                <li>走走停停，在旅途中偶遇渔村客栈，下一站的幸福就在</li>
                <li>走走停停，在旅途中偶遇渔村客栈，下一站的幸福就在</li>
                <li>走走停停，在旅途中偶遇渔村客栈，下一站的幸福就在</li>
                <li>走走停停，在旅途中偶遇渔村客栈，下一站的幸福就在</li>
                <li>走走停停，在旅途中偶遇渔村客栈，下一站的幸福就在</li>
                <li>走走停停，在旅途中偶遇渔村客栈，下一站的幸福就在</li>
                <li>走走停停，在旅途中偶遇渔村客栈，下一站的幸福就在</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 联系我们 -->
        <div class="content-callme">
          <div class="callme-header">
            <span class="header-title">联系我们</span>
            <span class="header-explain">您要是有什么建议的话可以随时联系我们哦~~</span>
          </div>
          <div class="callme-content">
            <div class="content-ifm">
              <h1>联系方式</h1>
              <span style="fontWeight:700">Family Inn</span>
              <p>
                安徽省合肥市蜀山区莲花路1688号<br>
                <span>家庭客栈管理系统</span>
              </p>
              <p>
                TEL：18655634313 <br>
                <span>QQ：1623255469</span>
              </p>
            </div>
            <div class="content-edit">
              <a-textarea placeholder="反馈内容" :rows="8"/>
              <a-button type="primary">反馈意见</a-button>
            </div>
          </div>
        </div>
      </a-layout-content>
      <a-layout-footer>
        <span>帮助</span>
        <a-divider type="vertical"></a-divider>
        <span>反馈意见</span>
        <a-divider type="vertical"></a-divider>
        <span>投诉举报</span>
        <a-divider type="vertical"></a-divider>
        <span>知道协议</span><br>
        <span>版权所有：合师软工江</span>

      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import $ from 'jquery';
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
      // 点击登录事件，角色登录
      loginClick({ key }) {
        if(`${key}` === "1") {
          this.$router.push("userlogin");
        } else {
          this.$router.push("adminlogin");
        }
      },
      // 触发的点击事件，点击标题滑动到指定位置
      scrollClick(num) {
        switch(num) {
          case 1:
            $('html,body').animate({scrollTop:0},10);
            break;
          case 2:
            var scrolltop = $('.content-service').offset().top;
            $('html,body').animate({scrollTop:scrolltop},500);
            break;
          case 3:
            var scrolltop = $('.content-roomimg').offset().top;
            $('html,body').animate({scrollTop:scrolltop},1000);
            break;
          case 4:
            var scrolltop = $('.content-eatimg').offset().top;
            $('html,body').animate({scrollTop:scrolltop},1500);
            break;
          case 5:
            var scrolltop = $('.content-aboutmine').offset().top;
            $('html,body').animate({scrollTop:scrolltop},2000);
            break;
          case 6:
            var scrolltop = $('.content-callme').offset().top;
            $('html,body').animate({scrollTop:scrolltop},2500);
            break;
        }
      },
    }
  }
</script>


<style scoped lang="less">
  #components-layout-demo-basic {
    margin: 0;
    padding: 0;
    text-align: center;
    .ant-layout-header,
    .ant-layout-footer {
      background: rgb(78, 71, 71);
      color: #fff;
    }
    
    /* 1、header */
    .ant-layout-header {
      ul {
          list-style: none;
          width: auto;
          display: flex;
          display: -webkit-flex;
          -webkit-flex-direction: row;
          flex-direction: row;
          justify-content: flex-end;
          margin: 0;
          padding: 0;
          li {
            width: 100px;
            font-size: 20px;
            .ant-dropdown-link {
              color: #fff
            }
          }
          li:hover {
            background-color:rgb(13, 115, 155)
          }
      }
      
    }
    
    /* 2、content */
    .ant-layout-content {
      color: #000;
      // 客房图片
      .content-roomimg {
        width: 100%;
        height: 950px;
        .roomimg-header {
          width: 100%;
          height: 20%;
          .header-title {
            font-size: 50px;
            display: block;
          };
          .header-explain {
            display:block;
            margin-top: 40px;
          }
        }
        .roomimg-content {
          width: 100%;
          height: 80%;
          // text-align: center;
          align-content: center;
          ul {
            width: 80%;
            height: 100%;
            list-style: none;
            display: -webkit-flex;
            display: flex;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            flex-wrap: wrap ;
            // text-align: center;
            // align-content: center;
            margin: 0 auto;
            li {
              width: 23%;
              height: 40%;
              img {
                width:100%;
                height: 100%;
                // max-width: 100%;
                // max-height: 100%;
              }
            }
          }
        }
      }
      // 餐厅图片
      .content-eatimg {
        width: 100%;
        height: 950px;
        .eatimg-header {
          width: 100%;
          height: 20%;
          .header-title {
            font-size: 50px;
            display: block;
          };
          .header-explain {
            display:block;
            margin-top: 40px;
          }
        }
        .eatimg-content {
          width: 100%;
          height: 80%;
          // text-align: center;
          align-content: center;
          ul {
            width: 80%;
            height: 100%;
            list-style: none;
            display: -webkit-flex;
            display: flex;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            flex-wrap: wrap ;
            margin: 0 auto;
            li {
              width: 23%;
              height: 40%;
              img {
                width:100%;
                height: 100%;
              }
            }
          }
        }
      }
      /* 服务 */
      .content-service {
        width: 100%;
        height: 950px;
        background-color: rgb(13, 115, 155);
        .service-header {
        width: 100%;
        height: 20%;
        font-size: 50px;
        }
        .service-content {
          width: 100%;
          height: 80%;
          ul {
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
            li {
              width: 30%;
              height: 20%;
              position: relative;
              .serviceimage {
                color: #fff;
                font-size: 100px;
                margin-right: 40%;
              }
              .service-content-title {
                font-size: 40px;
                display: block;
                position: absolute;
                top:5%;
                left: 45%;

              }
              .service-content-explain {
                display: block;
                position: absolute;
                left: 40%;
                top:60%;
                width: 40%;
              }
            }
          }
        }
      }
      // 关于我们
      .content-aboutmine {
        width: 100%;
        height: 950px;
        background-color: rgb(78, 71, 71);
        color: #fff;
        overflow: hidden;
        .aboutmine-header {
          width: 100%;
          height: 20%;
          .header-title {
            font-size: 50px;
            display: block;
          };
          .header-explain {
            display:block;
            margin-top: 40px;
          }
        }
        .aboutmine-content{
          width: 100%;
          height: 80%;
          .content-image {
            width: 50%;
            height: 100%;
            float: left;
            img {
              width: 80%;
              height:80%;
              // margin-top: 10%;
            }
          }
          .content-text {
            width: 40%;
            height: 90%;
            float: right;
            margin-right: 10%;
            margin-top: 3%;
            text-align: left;
            h1 {
              font-weight: 700;
              color: #fff
            }
          }
        }
      }
      // 联系我们
      .content-callme {
        width: 100%;
        height: 950px;
        background: url("../../assets/image/callmebg.jpg") no-repeat;
        background-size: 100% 100%;
        color: #fff;
        padding: 1px; // 阻止下级的margin越级上报
        .callme-header {
          width: 100%;
          height: 20%;
          margin-top: 10%;
          .header-title {
            font-size: 50px;
            display: block;
          };
          .header-explain {
            display:block;
            margin-top: 40px;
          }
        }
        .callme-content {
          width: 70%;
          height: 50%;
          margin: 0 auto;
          background-color: rgb(13, 115, 155);
          color:#000;
          .content-ifm {
            width: 30%;
            float: left;
            margin-top: 10%;
            margin-left: 10%;
            text-align: left;
          }
          .content-edit {
            width: 50%;
            float: right;
            margin-top: 10%;
            margin-right: 10%;
            text-align: left;
            button {
              margin-top: 10px;
            }
          }
        }

      }
    }

    /* 3、footer */
    #components-layout-demo-basic .ant-layout-footer {
      line-height: 1.5;
    }
  }
  
</style>
