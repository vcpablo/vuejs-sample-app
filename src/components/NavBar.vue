<template>
  <v-card color="grey lighten-4" flat>
    <v-toolbar>
      <v-toolbar-title>
        <v-icon>mdi-bookshelf</v-icon>
      </v-toolbar-title>
      <v-btn text :to="{ name: 'Home' }" exact>
        Home
      </v-btn>
      <v-btn text :to="{ name: 'Books' }" exact>
        Books
      </v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
