<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col class="d-flex">
          <SearchBar v-model="search" />
          <ViewModeToggle v-model="mode" />
        </v-col>
      </v-row>
      <BooksList :mode="mode" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import SearchBar from './SearchBar'
import ViewModeToggle from './ViewModeToggle'
import BooksList from './BooksList'

export default {
  name: 'FilterableBooksList',
  components: {
    SearchBar,
    ViewModeToggle,
    BooksList
  },
  data: () => ({
    search: '',
    mode: 'table'
  }),
  computed: {
    ...mapState('books', ['books']),
    ...mapGetters('books', ['totalBooks'])
  },
  watch: {
    search(value) {
      this.setSearch(value)
    }
  },
  async created() {
    await this.fetchBooks()
  },
  methods: {
    ...mapMutations('books', ['setSearch']),
    ...mapActions('books', ['fetchBooks'])
  }
}
</script>
