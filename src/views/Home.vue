<template>
  <div class="container">
    <div class="content">
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
      <div class="list"></div>
      <div class="detail"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ct-home'
  }
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";
.container{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  .content{
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
    }
  }
}
</style>
