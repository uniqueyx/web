import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test2 from '@/components/Test2'
import BackStageLogin from '@/components/BackStageLogin'
import BackStageList from '@/components/BackStageList'
import Agreement from '@/components/Agreement'
import SubmitInfo from '@/components/SubmitInfo'
import AdminCreate from '@/components/AdminCreate'
import SubmitSuccess from '@/components/SubmitSuccess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Test2',
      name: 'Test2',
      component: Test2
    },
    {
      path: '/BackStageLogin',
      name: 'BackStageLogin',
      component: BackStageLogin
    },
    {
      path: '/BackStageList',
      name: 'BackStageList',
      component: BackStageList
    },
    {
      path: '/Agreement',
      name: 'Agreement',
      component: Agreement
    },
    {
      path: '/SubmitInfo',
      name: 'SubmitInfo',
      component: SubmitInfo
    },
    {
      path: '/AdminCreate',
      name: 'AdminCreate',
      component: AdminCreate
    },
    {
      path: '/SubmitSuccess',
      name: 'SubmitSuccess',
      component: SubmitSuccess
    }
    
  ]
})
