<template>
  <login-and-registration-form
    @submit="submitHandler"
  >
    <template
      #default="{ rowClasses, buttonClasses }"
    >
      <login-and-registration-field-group
        :class="rowClasses"
        label="Email"
      >
        <login-and-registration-field
          v-model="email"
          placeholder="Email"
        />
      </login-and-registration-field-group>
      <login-and-registration-field-group
        :class="rowClasses"
        label="Password"
      >
        <login-and-registration-field
          v-model="password"
          placeholder="Password"
        />
      </login-and-registration-field-group>
      <login-and-registration-button
        :class="buttonClasses"
      >
        Log in
      </login-and-registration-button>
    </template>
  </login-and-registration-form>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
  } from 'vue-property-decorator';
  import LoginFieldEyeIcon from '@/components/login-and-registration/LoginAndRegistrationFieldEyeIcon.vue';
  import LoginAndRegistrationField from '@/components/login-and-registration/LoginAndRegistrationField.vue';
  import LoginAndRegistrationFieldGroup from '@/components/login-and-registration/LoginAndRegistrationFieldGroup.vue';
  import LoginAndRegistrationButton
    from '@/components/login-and-registration/LoginAndRegistrationButton.vue';
  import LoginAndRegistrationForm
    from '@/components/login-and-registration/LoginAndRegistrationForm.vue';


  @Component({
    components: {
      LoginAndRegistrationForm,
      LoginAndRegistrationButton,
      LoginAndRegistrationFieldGroup,
      LoginAndRegistrationField,
      LoginFieldEyeIcon,
    },
  })
  export default class LoginForm extends Vue {
    public email = '';
    public password = '';

    public submitHandler(): void {
      // DO NOTHING
    }
  }
</script>
