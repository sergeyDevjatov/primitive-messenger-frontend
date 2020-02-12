<script lang="ts">
  import {
    Component,
    Vue,
    Watch,
  } from 'vue-property-decorator';
  import { Route } from 'vue-router';

  @Component
  export default class RouteAccess extends Vue {
    @Watch('$route', {
      immediate: true,
    }) routeChangeHandler(route: Route) {
      if(route.matched.length <= 0) {
        return;
      }

      const isRouteAvailableWithoutAuthentication = route.matched
        .some(r => r.meta.isPublic);

      console.log('hello', { ...route }, isRouteAvailableWithoutAuthentication);

      if(isRouteAvailableWithoutAuthentication) {
        return;
      }

      if(this.isAuthenticated) {
        return;
      }

      this.$router.replace({
        name: 'login-page',
      });
    }

    // eslint-disable-next-line class-methods-use-this
    public get isAuthenticated(): boolean {
      return false;
    }

    public render() {
      return this.$slots.default && this.$slots.default[0];
    }
  }
</script>
