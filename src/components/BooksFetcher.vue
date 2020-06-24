<template>
  <v-row>
    <v-col>
      <Loading v-if="loading" />
      <Error v-else-if="error" />
      <slot v-else v-bind="{ loading, error, data }" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Loading from './Loading'
import Error from './Error'

export default {
  name: 'BooksFetcher',
  components: {
    Loading,
    Error
  },
  props: {
    bookId: {
      type: Number,
      default: null
    }
  },
  computed: {
    ...mapState('books', ['loading', 'error', 'data'])
  },
  created() {
    if (this.bookId) {
      this.fetchBookById(this.bookId)
    } else {
      this.fetchBooks()
    }
  },
  methods: {
    ...mapActions('books', ['fetchBooks', 'fetchBookById'])
  }
}
</script>
