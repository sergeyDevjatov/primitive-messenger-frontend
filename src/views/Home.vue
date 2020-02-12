<template>
  <div>
    <h3>
      Hello
    </h3>

    <p>
      <router-link :to="{ name: 'login-page', }">Log in</router-link>
    </p>
    <p>
      <router-link :to="{ name: 'login-page', }">Register</router-link>
    </p>
  </div>
</template>

<script lang="ts">

  export default {
    name: 'Home',
  };
</script>
