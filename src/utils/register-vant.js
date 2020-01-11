import Vue from 'vue'

// 按需加载vant组件
import { NavBar, Button, Field, CellGroup } from 'vant'

// 注册在全局
Vue.use(NavBar).use(Field).use(Button).use(CellGroup)
