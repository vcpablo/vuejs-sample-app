<template>
  <v-row>
    <v-col>
      <v-text-field v-model="search" label="Type to search..."></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      search: this.value
    }
  },
  watch: {
    search(value) {
      this.$emit('input', value)
    }
  }
}
</script>
