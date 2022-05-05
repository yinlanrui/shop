import { createStore } from 'vuex'
import {getClassify} from "@/api";

export default createStore({
  //组件之间的数据
  state: {
      data:[

      ]
  },
  getters: {
  },
  mutations: {

  },
  actions: {
    async getId(){
      let res=await getClassify();
      console.log(res.data)
      this.data=res.data.data;
    }
  },
  modules: {
  }
})
