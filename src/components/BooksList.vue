<template>
  <v-row>
    <v-col>
      <v-skeleton-loader v-if="books.loading" type="list-item-two-line" />
      <v-alert v-else-if="books.error">
        Unable to load books
      </v-alert>
      <v-row v-else>
        <v-col>
          <v-alert v-if="books.length === 0" dense outlined type="info">
            No books found
          </v-alert>
          <template v-else>
            <BooksTable v-if="isTableView" :books="filteredBooks" />
            <BooksCards v-else :books="filteredBooks" />
          </template>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import BooksTable from './BooksTable'
import BooksCards from './BooksCards'

export default {
  name: 'BooksList',
  components: {
    BooksTable,
    BooksCards
  },
  props: {
    mode: {
      type: String,
      default: 'table'
    }
  },
  computed: {
    ...mapState('books', ['books']),
    ...mapGetters('books', ['filteredBooks']),
    isTableView() {
      return this.mode === 'table'
    }
  }
}
</script>
