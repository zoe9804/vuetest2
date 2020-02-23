import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "../App2";
import PageOne from "../views/PageOne";
import PageTwo from "../views/PageTwo";
import PageThree from "../views/PageThree";
import PageFour from "../views/PageFour";

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"导航1",
    component:App,
    children:[
      {
        path: "/pageOne",
        name:"页面1",
        component: PageOne
      },
      {
        path: "/pageTwo",
        name:"页面2",
        component:PageTwo
      },
    ]
  },
  {
    path:"/navigation",
    name:"导航2",
    component:App,
    children:[
      {
        path: "/pageThree",
        name:"页面3",
        component: PageThree
      },
      {
        path: "/pageFour",
        name:"页面4",
        component: PageFour
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
