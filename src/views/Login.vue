<template>
  <div
    :class="$style.page"
  >
    <login-form
      :class="$style.form"
    />
  </div>
</template>

<script lang="ts">
  import LoginForm from '@/components/login-and-registration/LoginForm.vue';
  import {
    Component, Vue,
  } from 'vue-property-decorator';

  @Component({
    components: {
      LoginForm,
    },
  })
  export default class Login extends Vue {
  }
</script>

<style lang="scss" module>
  .page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }

  .form {
    width: 40%;
    margin: auto;
  }
</style>
