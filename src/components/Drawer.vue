<template>
   <v-navigation-drawer :value="drawer" app clipped>
 <div class="d-flex flex-column justify-center align-center mb-4">
      <div class="pt-4">
        <v-avatar size="128">
          <img :src="user.photoURL || defaultPicture" alt="Profile Pic" />
        </v-avatar>
      </div>
      <h1 class="font-weight-regular">{{ user.displayName }}</h1>
      <h5 class="font-weight-light mb-4">{{ user.email }}</h5>
      <v-btn color="error" @click="logOut">Logout</v-btn>
    </div>
  </v-navigation-drawer>

</template>

<script>
import { mapGetters, mapActions } from "vuex"
import defaultPicture from '../assets/user.png'

export default {
    name: "Drawer",
    data() {
    return {
      defaultPicture,
    }
    },
    computed: {
        ...mapGetters({
            drawer: "getDrawer",
            user: "getUser"
    })
    },
      methods: {
        logOut() {
            this.$firebase.auth().signOut(),
            this.setUser(""),
            this.hideDrawer(),
            this.$store.dispatch("hideDrawer"),
            this.$router.push('/login')
    },
    ...mapActions(["setUser", "hideDrawer"])
},
}
</script>