<template>
   <v-navigation-drawer :value="drawer" app clipped>
 
  </v-navigation-drawer>

</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: "Drawer",
    computed: {
        ...mapGetters({
            drawer: "getDrawer"
    }),
    }

}
</script>
