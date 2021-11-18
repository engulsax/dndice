<template>
  <div class="counter">
    <div @click="minus()">
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
    <div @click="plus()">
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
    gap: 0.5rem;
    padding: 1rem;
    div{
        display: flex;
        padding: 0 0.3rem;
        width: 2.5rem;
        height: 3.5rem;
        background-color: var(--counter-color);
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