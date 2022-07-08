<script setup>
const app_name = import.meta.env.APP_NAME
</script>

<template>
  <v-navigation-drawer app color="primary">
    <!-- -->
  </v-navigation-drawer>

  <v-app-bar app color="primary" />
  <v-main>
    <v-container fluid>
      <RouterView />
    </v-container>
  </v-main>
  <Footer color="primary" />
</template>
