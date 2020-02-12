<template>
  <firebase-auth
    :phone="phone"
    :code="code"
    :recaptcha-container="recaptchaContainer"
  >
    <template
      #default="{ state, next }"
    >
      <login-and-registration-form
        @submit="submitHandler(next)"
      >
        <template
          #default="{ rowClasses, buttonClasses }"
        >
          <template
            v-if="state === 'initial'"
          >
            Wait a second...
          </template>
          <login-and-registration-field-group
            v-if="state === 'need-phone'"
            :class="rowClasses"
            label="Phone"
          >
            <login-and-registration-field
              v-model="phone"
              placeholder="Phone"
            />
          </login-and-registration-field-group>
          <login-and-registration-field-group
            v-if="state === 'need-code'"
            :class="rowClasses"
            label="Code"
          >
            <login-and-registration-field
              v-model="code"
              placeholder="Code"
            />
          </login-and-registration-field-group>
          <template
            v-if="state === 'done'"
          >
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
              Register
            </login-and-registration-button>
          </template>
          <div
            ref="recaptchaContainer"
          >

          </div>
        </template>
      </login-and-registration-form>
    </template>
  </firebase-auth>
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
  import FirebaseAuth from '@/components/firebase-auth/FirebaseAuth.vue';


  @Component({
    components: {
      FirebaseAuth,
      LoginAndRegistrationForm,
      LoginAndRegistrationButton,
      LoginAndRegistrationFieldGroup,
      LoginAndRegistrationField,
      LoginFieldEyeIcon,
    },
  })
  export default class RegistrationForm extends Vue {
    public recaptchaContainer: Element | null = null;
    public phone = '';
    public code = '';
    public password = '';

    public mounted(): void {
      this.recaptchaContainer = this.$refs.recaptchaContainer as Element;
    }

    public submitHandler(next: () => any): void {
      next();
    }
  }
</script>
