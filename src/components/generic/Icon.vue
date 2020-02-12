<template>
  <i :class="`material-icons md-${size}`">{{name}}</i>
</template>

<script lang="ts">
  export default {
    props: {
      size: {
        type: [Number, String],
        default: 24,
      },
      name: {
        type: String,
        required: true,
      },
    },
  };
</script>
