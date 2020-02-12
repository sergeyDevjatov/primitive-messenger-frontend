<template>
  <div
    :class="$style.group"
  >
    <div
      :class="$style.label"
    >
      {{label}}
    </div>
    <div
      :class="$style.field"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss" module>
  .group {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
  }

  .label {
    color: #222222;
    font-size: 20px;
    font-weight: 500;
  }

  .field {
    align-self: stretch;
    font-size: 14px;
  }

  .label + .field {
    margin-top: 8px;
  }
</style>
