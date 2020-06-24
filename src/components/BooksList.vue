<template>
  <v-row>
    <v-col>
      <v-alert v-if="hasNoBooks" dense outlined type="info">
        No books found
      </v-alert>
      <template v-else>
        <BooksTable v-if="isTableView" :books="books" />
        <BooksCards v-else :books="books" />
      </template>
    </v-col>
  </v-row>
</template>

<script>
import BooksTable from './BooksTable'
import BooksCards from './BooksCards'

export default {
  name: 'BooksList',
  components: {
    BooksTable,
    BooksCards
  },
  props: {
    books: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: 'table'
    }
  },
  computed: {
    isTableView() {
      return this.mode === 'table'
    },
    hasNoBooks() {
      return this.books && this.books.length === 0
    }
  }
}
</script>
