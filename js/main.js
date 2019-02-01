document.getElementById('button').addEventListener('click', function() {
  let search = document.getElementById('search').value
  let url = "https://www.googleapis.com/books/v1/volumes?q=" + search

  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let output = "<h2>Results</h2>"
    if (data.items !== undefined) {
      data.items.forEach(function(result) {
        output += `
          <div>
            <h3>${result.volumeInfo.title}</h3>
            <p>Authors: ${result.volumeInfo.authors}</p>
            <p>Publisher: ${result.volumeInfo.publisher}</p>
            <img src=${result.volumeInfo.imageLinks.smallThumbnail}>
            <p><a href=${result.volumeInfo.infoLink}>More Information</a></p>
          </div>
        `;
      })
    }
    else {
      output += '<h3>No Results</h3>'
    };
    document.getElementById('results').innerHTML = output
  })
  .catch((error) => console.log(error))
})