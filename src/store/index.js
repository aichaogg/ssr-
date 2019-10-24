import Vue from 'vue'
import vuex from 'vuex';

// 注入
Vue.use(vuex)

// 全局数据
 
const state={
  count:1024

}

// 定义mutations 负责修改数据
const mutations={
  // 2 state 等于 上面定义的 state 一样！！ 
  increment(state,num){
    state.count+=num;
  }
}

// 定义action 负责异步同步
const actions={
  Asycn(all,num){
    all.commit('increment',num)
  }
}

export default new vuex.Store({state,mutations,actions})