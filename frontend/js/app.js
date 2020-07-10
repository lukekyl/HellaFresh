$(document).foundation();
document.addEventListener('DOMContentLoaded', () => {

    //Dev Mode
    // const appUrl = 'http://localhost:3000'

    //Heroku Mode
    const appUrl = ''

    const searchForm = document.getElementById('search_form')
    let searchTerm = ""


    // First Page Load Menu Call
    Product.fetchMenu(searchTerm)

    // Watch Filter Search Bar
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();
            searchTerm = event.target.firstElementChild.firstElementChild.firstElementChild.firstElementChild.value.toLowerCase()
            Product.fetchMenu(searchTerm);
        })


});