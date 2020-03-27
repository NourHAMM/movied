<template>
  <v-app-bar app clipped-left dark color="purple">
    <v-app-bar-nav-icon @click="drawer ? hideDrawer() : showDrawer()" />
    <v-toolbar-title class="font-weight-light">
      <span>Movies</span>
      <span class="font-weight-regular">DB</span>
    </v-toolbar-title>
  </v-app-bar>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'NavBar',
  computed: {
    ...mapGetters({
      drawer: 'getDrawer',
      
    }),
  },
  methods: {

    ...mapActions(['hideDrawer', 'showDrawer']),
  },
}
</script>