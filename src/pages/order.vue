<template>
    <div>
        order
        <OrderHeader></OrderHeader>
        <router-view></router-view>
        <NavFooter></NavFooter>
    </div>
</template>
<script>
import NavFooter from './../components/NavFooter.vue'
import OrderHeader from '../components/OrderHeader.vue'
    export default{
        name:'nav-home',
        components:{
    NavFooter,
    OrderHeader
}
        
    }
</script>