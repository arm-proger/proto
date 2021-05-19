// Alphabet array
const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')

// Proto object
const paginationMethods = {
  book: undefined,
  currentPage: 1,
  init: (array, contentCount) => {
    let pages = []

    const pagesContents = array.reduce((acc, el) => {
      if (pages.length === 0 || pages.length % contentCount !== 0) {
        pages.push(el)
      }

      if (
        array.indexOf(el) === array.length - 1 ||
        pages.length % contentCount === 0
      ) {
        acc.push(pages)
        pages = []
      }
      return acc
    }, [])

    paginationMethods.book = pagesContents
  },
  // Get current page
  getPageItems: () => {
    return paginationMethods.book[paginationMethods.currentPage - 1]
  },
  // Next page
  nextPage: () => {
    paginationMethods.currentPage++
    return Pagination
  },
  // Prev page
  prevPage: () => {
    paginationMethods.currentPage++
    return Pagination
  },
  // First page
  firstPage: () => {
    return paginationMethods.book[0]
  },
  // Last page
  lastPage: () => {
    return paginationMethods.book[paginationMethods.book.length - 1]
  },
  // Go to page
  goToPage: (pageNumber) => {
    paginationMethods.currentPage = pageNumber
  },
}

// Pagination object
const Pagination = Object.create(paginationMethods)

Pagination.init(alphabetArray, 4)
console.log(Pagination.getPageItems()) // ["a", "b", "c", "d"]
Pagination.nextPage() // add the current page by one
console.log(Pagination.getPageItems()) // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage() // the ability to call chainable
console.log(Pagination.getPageItems()) // ["m", "n", "o", "p"]
Pagination.goToPage(3) // current page must be set to 3
console.log(Pagination.getPageItems()) // ["i", "j", "k", "l"]
