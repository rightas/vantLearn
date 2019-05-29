<template>
  <div class="hello">
    <!-- 栅格系统 span:栅格得占位格数  -->
    <!-- <Row>
      <i-col span="12">col-12</i-col>
      <i-col span="12">col-12</i-col>
    </Row> -->
    <!-- 栅格系统 push:向右移动格数 pull:想左移动格数 -->
    <!-- <Row>
      <i-col span="12"
             push="3">push-col-12</i-col>
      <i-col span="8">push-col-12</i-col>
    </Row> -->
    <!-- 按钮组件 -->
    <!-- <i-button type="primary">Primary</i-button>
    <i-button type="ghost">Ghost</i-button>
    <i-button type="dashed">Dashed</i-button>
    <i-button type="text">Text</i-button>
    <i-button type="info">信息按钮</i-button>
    <i-button type="success">成功按钮</i-button>
    <i-button type="warning"> 警告按钮</i-button>
    <i-button type="error">错误按钮</i-button>
    <p>圆角按钮</p>
    <i-button type="primary"
              shape="circle"
              icon="ios-search"></i-button>
    <i-button type="primary"
              icon="ios-search">搜索</i-button>
    <Button-group>
      <i-button type="primary"
                icon="ios-skipbackward"></i-button>
      <i-button type="primary"
                icon='ios-skipforward'></i-button>
    </Button-group> -->
    <!-- 输入框 -->
    <!-- <p>
      <i-input :value.sync="value"
               placehoder="请输入"
               style="width:300px;"></i-input>
    </p> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      value: ''
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
