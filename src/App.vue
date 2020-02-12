<template>
  <div
    :class="$style.app"
  >
    <route-access>
      <router-view/>
    </route-access>
  </div>
</template>

<style lang="scss" module>
  :global(html), :global(body) {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .app {
    &, :global(input), :global(textarea), :global(button) {
      font-family: 'Fira Sans', Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :global(button) {
      cursor: pointer;
    }

    text-align: left;

    width: 100%;
    height: 100%;

    background: darkturquoise;
  }
</style>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import RouteAccess from '@/RouteAccess.vue';


  @Component({
    components: {
      RouteAccess,
    },
  })
  export default class App extends Vue {
  }
</script>
