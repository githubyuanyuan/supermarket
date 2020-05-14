<template>
  
    <div @click="itemClick" class="tab-bar-item"> 
        <div v-if='!isActive'> <slot name="item-icon"></slot> </div>
       
       <div v-else>  <slot name="item-icon-activate"></slot> </div>  
       <div :class="{active:!isActive}"><slot name="item-text"></slot></div>
    </div>

</template>

<script>
export default {
  name: '',
  props: {
      path:String,
  },
  data () {
    return {
     

    }
  },

  methods: {
      itemClick(){
          console.log('itemClick')
          console.log(this.$route.path)
          this.$router.replace(this.path)
      }
  },
  computed: {      
      isActive(){
          return this.$route.path.indexOf(this.path)
      }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
  margin-top:3px;

}
.active{
    color: red;
}
</style>
