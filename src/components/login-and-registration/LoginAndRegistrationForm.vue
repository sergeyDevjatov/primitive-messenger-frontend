<template>
  <div
    :class="$style.block"
  >
    <form
      @submit.prevent="$emit('submit')"
      :class="$style.form"
    >
      <slot
        :row-classes="$style.row"
        :button-classes="$style.button"
      >
      </slot>
    </form>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'LoginAndRegistrationForm',
  };
</script>

<style lang="scss" module>
  .block {
    padding: 20px;
    border-radius: 10px;
    background: white;
  }

  .form {
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
  }

  .row + .row {
    margin-top: 16px;
  }

  .button {
    composes: row;
    align-self: stretch;
  }
</style>
