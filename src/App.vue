<template>
  <div id="app">
    微笑
  <h1>{{count}}</h1>  
    <button @click="handleIncrement">+</button>
    <button @click="handleAsycn">异步操作</button>
  </div>
</template>

<script>
export default {
  // 计算属性
  computed: {
    count(){
      return this.$store.state.count;
    }
  },
  methods: {
    // 触发点击事件 
    handleIncrement(){
      let num=1000
      this.$store.commit('increment',num)
    },
    handleAsycn(){
      // action负责异步修改数据
      let num=10000
      // 有dispatch肯定有action 
      this.$store.dispatch('Asycn',num)
    }
  }
}
</script>
