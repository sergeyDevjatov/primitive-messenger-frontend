<template>
  <button
    :class="$style.button"
    @click.stop="$emit('click', $event)"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
  export default {
    props: {
      type: {
        type: String,
        default: 'submit',
      },
    },
  };
</script>

<style lang="scss" module>
  .button {
    background: cornflowerblue;
    border: 2px solid royalblue;
    outline: 0;
    border-radius: 10px;
    color: #ffffff;
    font-size: 14px;
    padding: 7px 0 6px;
    text-align: center;
  }
</style>
