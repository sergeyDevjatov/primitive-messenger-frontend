<template>
  <label
    :class="$style.field"
  >
    <input
      :class="$style.input"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :type="typeForInput"
      :placeholder="placeholder"
    />
    <login-and-registration-field-eye-icon
      v-if="type === 'password'"
      :is-show-password="isShowPassword"
      @click.native="eyeIconClickHandler"
    />
  </label>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import LoginAndRegistrationFieldEyeIcon from '@/components/login-and-registration/LoginAndRegistrationFieldEyeIcon.vue';


  @Component({
    components: {
      LoginAndRegistrationFieldEyeIcon,
    },
  })
  export default class LoginAndRegistrationField extends Vue {
    @Prop({
      type: [String, Number],
      default: '',
    }) value!: string | number;

    @Prop({
      type: String,
      default: 'text',
    }) type!: string;

    @Prop({
      type: String,
      default: null,
    }) placeholder!: string | null;

    public isShowPassword = false;

    public get typeForInput(): string {
      if(this.type === 'password' && this.isShowPassword) {
        return 'text';
      }
      return this.type;
    }

    public eyeIconClickHandler(): void {
      if(this.type !== 'password') {
        return;
      }

      this.isShowPassword = !this.isShowPassword;
    }
  }
</script>

<style lang="scss" module>
  .field {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    border-bottom: 2px solid #ccc;
  }

  .input {
    font-size: 1em;
    align-self: stretch;
    border: none;
    outline: none;
  }
</style>
