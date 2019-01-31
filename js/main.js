document.getElementById('button').addEventListener('click', function() {
  var search = document.getElementById('search').value
  document.getElementById('results').innerHTML = ""

  fetch("https://www.googleapis.com/books/v1/volumes?q=" + search).then(function(response) {
    console.log(response.json())
  })
})