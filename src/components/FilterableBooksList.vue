<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col class="d-flex">
          <SearchBar v-model="search" />
          <ViewModeToggle v-model="mode" />
        </v-col>
      </v-row>
      <BooksList :books="filteredBooks" :mode="mode" />
    </v-col>
  </v-row>
</template>

<script>
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
  props: {
    books: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    search: '',
    mode: 'table'
  }),
  computed: {
    filteredBooks() {
      if (this.search) {
        return this.books.filter(book =>
          Object.values(book).some(value =>
            String(value)
              .toLowerCase()
              .includes(this.search.toLowerCase())
          )
        )
      }

      return this.books
    }
  }
}
</script>
