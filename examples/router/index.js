import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import navConf from '../nav.config.json'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/test',
//       name: 'test',
//       component: r => require.ensure([], () => r(require('../docs/test.md')))
//     }
//   ]
// })

let routes = []

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header])
})

let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.type === 'pages') {
        route.component = r => require.ensure([], () => r(require(`../pages/${route.name}.vue`)))
      } else {
        route.component = r => require.ensure([], () => r(require(`../docs/${route.name}.md`)))
      }
    }
  })
}

addComponent(routes)

export default new Router({
  routes: routes
})
