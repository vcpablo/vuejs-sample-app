<template>
  <v-row>
    <v-col v-for="book in books" :key="book.id" cols="3">
      <v-card max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">Book #{{ book.id }}</div>
            <v-list-item-title class="headline mb-1">{{
              book.title
            }}</v-list-item-title>
            <v-list-item-subtitle>{{ book.author }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn text :to="{ name: 'BooksView', params: { id: book.id } }" exact
            >See More</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BooksCards',
  props: {
    books: {
      type: Array,
      default: () => []
    }
  }
}
</script>
