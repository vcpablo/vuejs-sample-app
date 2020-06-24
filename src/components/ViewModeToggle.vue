<template>
  <v-btn-toggle v-model="mode">
    <v-btn value="table">
      <v-icon>mdi-format-list-bulleted</v-icon>
    </v-btn>

    <v-btn value="card">
      <v-icon>mdi-table</v-icon>
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  name: 'ViewModeToggle',
  props: {
    value: {
      type: String,
      default: 'table'
    }
  },
  data() {
    return {
      mode: this.value
    }
  },
  watch: {
    mode(value) {
      this.$emit('input', value)
    }
  }
}
</script>
