<template>
  <v-app fill-height>
    <v-content>
      <shell>
        <nav-bar slot="navBar"/>
      </shell>
    </v-content>
  </v-app>
</template>

<script>
  import Shell from "./components/shell/shell";
  import NavBar from "./components/shell/navBar/navBar";

  export default {
    name: 'App',

    components: {NavBar, Shell},

    data(){
      return{

      }
    }
  };
</script>
<style scoped lang="scss">
</style>
