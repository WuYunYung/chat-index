<template>
  <div class="page">
    <div class="container">
      <nav class="nav">
        <div>
          <el-avatar class="avatar"></el-avatar>
        </div>
        <div class="chat">
          <i class="el-icon-s-comment"></i>
        </div>
        <div class="contact">
          <i class="el-icon-user-solid"></i>
        </div>
      </nav>
      <div class="list">
        <div class="search">
          <el-input
            v-model="search"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            size="small"
          ></el-input>
        </div>
        <div class="items-container">
          <ul class="items">
            <li v-for="i in 20" :key="i" class="item">
              <el-avatar class="avatar"></el-avatar>
              <div class="detail">
                <div class="left">
                  <b class="name">Wilson Wu</b>
                  <p class="content">Hello world!</p>
                </div>
                <div class="right">
                  <span class="time">00:00</span>
                  <el-badge class="mark" :value="1" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="detail"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ct-home',
    data() {
      return {
        search: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";
.page{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  .container{
    background: #fff;
    border-radius: 1rem;
    width: 80rem;
    height: 50rem;
    border: .1rem solid #ececec;
    display: flex;
    margin:1rem;
    .nav{
      width: 4rem;
      border-right: .1rem solid #ececec;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: 4rem;
      &>div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color:#ececec;
        cursor: pointer;
        &.active{
          color: $--color-primary;
        }
        &:hover{
          color:#b2b2b2;
        }
      }
    }
    .list{
      width: 16rem;
      border-right: .1rem solid #ececec;
      display: flex;
      flex-flow: column;
      overflow: hidden;
      .search{
        height: 4rem;
        border-bottom: .1rem solid #ececec;
        padding: 1rem;
        box-sizing: border-box;
      }
      .items-container{
        flex-grow: 1;
        overflow-y: auto;
        .items{
          width: 100%;
          list-style: none;
          padding: 0;
          margin: 0;
          .item{
            display: flex;
            align-items: center;
            height: 4rem;
            padding: .5rem;
            box-sizing: border-box;
            gap:.5rem;
            &:hover{
              background-color: #ececec;
            }
            .detail{
              flex-grow: 1;
              display: flex;
              justify-content: space-between;
              .left{
                display: flex;
                flex-flow: column;
                gap: .3rem;
                justify-content: center;
                .name{
                  font-size: .8rem;
                }
                .content{
                  font-size: .5rem;
                  margin: 0;
                  color:#656565;
                }
              }
              .right{
                display: flex;
                flex-flow: column;
                gap: .5rem;
                justify-content: center;
                text-align: right;
                .time{
                  font-size: .4rem;
                  color:#969696;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
