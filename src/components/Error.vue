<template>
  <v-alert dense outlined type="error">
    {{ error }}
  </v-alert>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: [Object, String],
      required: true
    }
  }
}
</script>
