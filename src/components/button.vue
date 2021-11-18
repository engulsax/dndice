<template>
  <div
    class="button"
    @click="$emit('buttonClick')"
  >
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.button{
    background-color: var(--app-background-color-secondary);
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: 70%;
    margin: 0 auto;
    .text{
        margin: 0;
        text-align: center;
        color: var(--text-primary-color);
    }
}

</style>