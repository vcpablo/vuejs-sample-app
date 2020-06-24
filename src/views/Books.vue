<template>
  <BooksFetcher>
    <template #default="{ loading, error, data }">
      <FilterableBooksList :books="data" />
    </template>
  </BooksFetcher>
</template>

<script>
import BooksFetcher from '../components/BooksFetcher'
import FilterableBooksList from '../components/FilterableBooksList'

export default {
  name: 'Books',
  components: {
    BooksFetcher,
    FilterableBooksList
  }
}
</script>
