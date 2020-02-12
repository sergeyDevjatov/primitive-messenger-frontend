<template>
  <login-and-registration>
    <registration-form-fields />
  </login-and-registration>
</template>

<script lang="ts">
  import RegistrationFormFields from '@/components/login-and-registration/RegistrationForm.vue';
  import LoginAndRegistration from '@/components/login-and-registration/LoginAndRegistrationForm.vue';

  export default {
    components: {
      LoginAndRegistration, RegistrationFormFields,
    },
  };
</script>
