<template>
  <v-row>
    <v-col class="text-center">
      <v-progress-circular
        indeterminate
        :rotate="0"
        :size="24"
        width="2"
        color="primary"
      />
      Loading...
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Loading'
}
</script>
