<template>
 <div class="GoodsList">
 <NavHreader></NavHreader>
<div class="nav-breadcrumb-wrap">  
  <div class="container">
    <!-- 这里存放面包屑，也就是功能一样内容不同的地方 -->
    <NavBread>
    <template v-slot:bread>
      <a href="/">首页</a>
      <span>商品列表</span>
    </template>
    </NavBread>
  </div>
</div>
<div class="accessory-result-page accessory-page">
  <div class="container">
    <div class="filter-nav">
      <span class="sortby">排序:</span>
      <a href="javascript:void(0)" class="default cur">默认</a>
      <a href="javascript:void(0)" class="price" :class="{'sort-up':order}" @click="goodsother">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
      <a href="javascript:void(0)" class="filterby stopPop">过滤规则</a>
    </div>
    <div class="accessory-result">
      <!-- filter -->
      <div class="filter stopPop" id="filter">
        <dl class="filter-price">
         <dt>价格:</dt>
            <dd>
            <a href="javascript:void(0)" v-bind:class="{'cur':maxprice=='all'}" @click="goodsWhere('all','all')">All</a>
            </dd>
            <dd>
            <a href="javascript:void(0)" v-bind:class="{'cur':maxprice==100}" @click="goodsWhere(0,100)">0 - 100</a>
            </dd>
            <dd>
            <a href="javascript:void(0)" v-bind:class="{'cur':maxprice==500}" @click="goodsWhere(100,500)">100 - 500</a>
            </dd>
            <dd>
            <a href="javascript:void(0)" v-bind:class="{'cur':maxprice==1000}" @click="goodsWhere(500,1000)">500 - 1000</a>
            </dd>
            <dd>
            <a href="javascript:void(0)" v-bind:class="{'cur':maxprice==2000}" @click="goodsWhere(1000,2000)">1000 - 2000</a>
            </dd>
        </dl>
      </div>

      <!-- search result accessories list -->
      <div class="accessory-list-wrap">
        <div class="accessory-list col-4">
          <ul>
            <li v-for="(goods,index) in goodslist" v-bind:key="index">
              <div class="pic">
                <a href="#"><img v-bind:src="goods.img2" alt=""></a>
              </div>
              <div class="main">
                <div class="name">{{goods.title}}</div>
                <div class="price">{{goods.price}}</div>
                <div class="btn-area">
                  <a href="javascript:;" class="btn btn--m" @click="add(goods.id)">加入购物车</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<medal v-bind:isMdShow="testmedal" @close="closemedal"></medal>
<!-- 加入购物车弹框 -->
<medal v-bind:isMdShow="isCartErrorShowFlag" @close="isCartErrorShowFlag=false">
  <template v-slot:main>
    请先登录，否则无法加入到购物车当中
  </template>
  <template v-slot:btngrop>
    <a class="btn btn--m" href="javascript:;" @click="isCartErrorShowFlag=false">关闭</a>
  </template>
</medal>
<!-- 加入购物车弹框2 -->
<medal v-bind:isMdShow="isCartOkShowFlag" @close="isCartOkShowFlag=false">
<template v-slot:main>
    <svg class="icon-status-ok">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
    </svg>
    <span>加入购物车成!</span>
</template>
<template v-slot:btngrop>
      <a class="btn btn--m" href="javascript:;" @click="isCartOkShowFlag = false">
      继续购物
      </a>
      <router-link class="btn btn--m btn--red" href="javascript:;" to="/cart">
      查看购物车
      </router-link>
</template>
</medal>
<NavFooter></NavFooter>

 </div>
</template>
 
<script>
import '@/assets/css/base.css'
import '@/assets/css/product.css'
//导入组件组件必须激活

import NavHreader from '@/components/NavHreader'
import NavFooter from '@/components/NavFooter'
import NavBread from '@/components/NavBread'
import medal from '@/components/medal'
import axios from 'axios'
export default {
  created(){
    this.initdata()
  },
  data(){
    return{
      minprice:'all',
      maxprice:'all',
      goodslist:[],
      order:false,
      isCartOkShowFlag:false,
      isCartErrorShowFlag:false,
      testmedal:false
    }
  },
  methods:{
    add(goodsId){
      let userId=1
      axios({
        method:"post",
        url:'http://118.31.9.103/api/cart/create',
        data:`userId=${userId}&goodsId=${goodsId}`
        })
        .then(res=>{
          if(res.data.meta.state==201){
            this.isCartOkShowFlag=true
          }else{
            this.isCartErrorShowFlag=true
          }
        })
        .catch(error=>{
          console.log(error)
        })
    },
    initdata(){
      let order=this.order? 'asc':'desc'
      axios({
      method:"get", 
      url:`http://118.31.9.103/api/goods/index?order=${order}&minprice=${this.minprice}&maxprice=${this.maxprice}`,
    })
    .then(res=>{
      this.goodslist=res.data.data
    })
    .catch(error=>{
      console.log(error)
    })
    },
    goodsWhere(minprice,maxprice){
      this.minprice=minprice
      this.maxprice=maxprice
      this.initdata()
    },
    goodsother(){
      this.order=!this.order
      this.initdata()
    },
    closemedal(){
      this.testmedal=false
    }

  },
  //声明组件或者导入组件
  components:{
    //激活头部组件
    NavHreader,
    //激活脚的组件
    NavFooter,
    NavBread,
    medal,
  }
}
</script>
 
<style scoped >
/* @import url('../assets/css/base.css');
@import url('../assets/css/product.css'); */

</style>