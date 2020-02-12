<template>
  <icon
    :name="iconName"
  />
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Icon from '@/components/generic/Icon.vue';


  @Component({
    components: { Icon },
  })
  export default class LoginAndRegistrationFieldEyeIcon extends Vue {
    @Prop({
      type: Boolean,
    }) isShowPassword!: boolean;

    public get iconName() {
      return this.isShowPassword
        ? 'eye-closed'
        : 'eye';
    }
  }
</script>
