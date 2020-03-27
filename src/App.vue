<template>
  <v-app>
  <v-navigation-drawer app>
 
  </v-navigation-drawer>

  <v-app-bar app>
   
  </v-app-bar>

  <v-content>

    <v-container fluid>

      <router-view></router-view>
    </v-container>
  </v-content>

  
</v-app>
</template>

<script>


export default {
  name: "App",

 
};
</script>
