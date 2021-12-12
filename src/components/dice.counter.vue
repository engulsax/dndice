<template>
  <div class="counter">
    <div
      class="left"
      @click="minus()"
    >
      <DynamicIcon
        class="icon"
        icon="minus"
      />
    </div>
    <div>
      <p class="font big">
        {{ diceState.amountOfDice }}
      </p>
    </div>
    <div
      class="right"
      @click="plus()"
    >
      <DynamicIcon
        class="icon"
        icon="plus"
      />
    </div>
  </div>
</template>

<script>
import diceState, { increaseDice, decreaseDice } from '../dice.state'
import DynamicIcon from '../components/dynamic.icon.vue'

export default {
    name: 'DiceCounter',
    components:{
        DynamicIcon,
    },
    data(){
        return{
            diceState,
        };
    },
    methods: {
        plus(){ increaseDice() },
        minus(){ decreaseDice() },
    },
}
</script>
<style lang="scss" scoped>
.counter{
    display: flex;
    justify-content: center;
    gap: 0.2rem;
    padding: 1rem;
    div{
        display: flex;
        padding: 0 0.3rem;
        width: 2.2rem;
        height: 3.5rem;
        border-radius: 0.1rem;
        background-color: var(--counter-color);
        &.left{
        width: 2rem;
        border-radius: 5rem  0.1rem 0.1rem 5rem;
        }
        &.right{
         width: 2rem;
        border-radius: 0.1rem 5rem 5rem 0.1rem;
        }
        &:hover{
            cursor: pointer;
        }
        .icon{
            display: flex;
            margin: auto auto;
            max-width: 1.4rem;
            max-height: 1.45rem;
            padding: 0.4rem;
        }
        p{
             margin: auto auto;
            text-align: center;
        }
    }
}

</style>