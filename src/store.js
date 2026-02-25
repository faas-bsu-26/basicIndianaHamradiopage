import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  books: [],
  fetchData: async function() {
    try {
      const response = await fetch('data.json');
      var loadedData = await response.json();
      this.books = loadedData.books;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  countUp() {
    this.count++
  }
})