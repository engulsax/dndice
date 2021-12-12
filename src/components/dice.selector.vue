<template>
  <div class="dice-selector">
    <div
      v-for="(d, i) in diceState.dices"
      :key="i"
      class="dice"
      :class="`${d.pos} ${diceState.selectedDie === i ? 'selected' : ''}`"
      @click="selectedDie(i)"
    >
      <DynamicIcon
        class="dice-image"
        :icon="`${getIconSrc(d)}-icon`"
      />
      <p class="font tiny">
        {{ d.text }}
      </p>
    </div>
  </div>
</template>

<script>
import diceState, { resetDie } from '../dice.state'
import DynamicIcon from '../components/dynamic.icon.vue'



export default {
  name: 'DiceSelector',
  components:{
    DynamicIcon,
  },
    data(){
        return{
            diceState,
        };
    },
    methods: {
      getIconSrc(d){
        return d?.src || d.text;
      },
      selectedDie(die){
        resetDie();
        diceState.selectedDie = die;
      }
    }
}
</script>

<style lang="scss" scoped>
.dice-selector{
    display: flex;
    background-color: var(--app-background-color-secondary);
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    .dice{
        display: flex;
        justify-content: end;
        flex-direction: column;
        background-color: var(--unselected-color);
        min-width: 2rem;
         border-radius: .5rem;
        &:hover{
            cursor: pointer;
        }
        &.selected{
            background-color: var(--selected-color);
        }
    }
    .dice-image{
        margin: auto auto;
        max-width: 1.4rem;
        max-height: 1.45rem;
        padding: 0.4rem;
    }
    p{
        margin: 0;
        margin-bottom: 0.5rem;
        overflow: hidden;
        text-align: center;
    }
}
</style>