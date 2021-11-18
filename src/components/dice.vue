<template>
  <div
    :key="rerender"
    class="dice"
  >
    <DynamicIcon :icon="`d${dieNum}`" /> 
  </div>
</template>

<script>
import diceState from '../dice.state'
import DynamicIcon from '../components/dynamic.icon.vue'

export default {
name: "Dice",
  components: {
    DynamicIcon,
  },
  props: ["dieNum",],
  data(){
    return{
      diceState,
      diceTextId: '',
      rerender: 0,
      };
    },
  watch:{
    'diceState.selectedDie': function() {
      this.rerender+=1;
    },
  },
}
</script>

<style lang="scss" scoped>

.font {
  text-align: center;
  position: absolute;
}
.dice{
  margin: 0 auto;
 svg{
     width: 6rem !important;
     height: 6rem !important; 
 }
}

</style>