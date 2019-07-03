<template>
 <div class="NavBread">
 <nav class="nav-breadcrumb">
       <!-- 面包屑的组件 使用slot占口子 -->
      <slot name="bread"></slot>
</nav>
 </div>
</template>
 
<script>
export default {
}
</script>
 
<style scoped >
 
</style>