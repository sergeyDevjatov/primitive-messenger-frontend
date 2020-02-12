<script lang="ts">
  import {
    Component,
    Prop,
    Vue, Watch,
  } from 'vue-property-decorator';
  import FirebasePhoneAuthentication from '@/model/FirebasePhoneAuthentication';


  type FirebaseAuthState = 'initial' | 'need-phone' | 'need-code' | 'done';

  @Component
  export default class FirebaseAuth extends Vue {
    @Prop({
      type: [String, Element],
    }) recaptchaContainer!: string | HTMLElement | null;

    @Prop({
      type: String,
      default: '',
    }) phone!: string;

    @Prop({
      type: String,
      default: '',
    }) code!: string;

    public state: FirebaseAuthState = 'initial';
    public error: Error | string | null = null;

    public firebasePhoneAuthentication = new FirebasePhoneAuthentication();

    public render() {
      return this.$scopedSlots.default && this.$scopedSlots.default({
        state: this.state,
        next: this.next,
      });
    }

    public get authentication(): Iterator<Promise<any>> | null {
      return !this.recaptchaContainer
        ? null
        : this.authenticationGenerator();
    }

    @Watch('authentication', {
      immediate: true,
    })
    authenticationChangeHandler(authentication: Iterator<Promise<any>> | null,
                                lastAuthentication?: Iterator<Promise<any>>) {
      if(authentication !== null && !lastAuthentication) {
        this.next();
      }
    }

    public async next(): Promise<any> {
      await this.authentication?.next().value;
    }

    public* authenticationGenerator(): Iterator<Promise<any>> {
      if(!this.recaptchaContainer) {
        throw new Error('authenticationGenerator needs this.recaptchaContainer to work');
      }
      this.state = 'initial';
      yield this.firebasePhoneAuthentication.verifyRecaptcha(this.recaptchaContainer)
        .then(this.updateState.bind(this, 'need-phone'))
        .catch(this.errorHandler);
      yield this.firebasePhoneAuthentication.sendCode(this.phone)
        .then(this.updateState.bind(this, 'need-code'))
        .catch(this.errorHandler);
      yield new Promise((resolve, reject) => {
        this.firebasePhoneAuthentication.confirmCode(this.code)
          .then((result) => {
            console.log('result', result);
            resolve(result);
          })
          .catch(reject);
      })
        .then(this.updateState.bind(this, 'done'))
        .catch(this.errorHandler);
    }

    public updateState(state: FirebaseAuthState) {
      this.state = state;
      console.log('Next state', state);
    }

    public errorHandler(error: Error | string) {
      this.error = error;
      console.error('Error on state ', this.state, error);
    }
  }
</script>
