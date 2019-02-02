function displayResults(sourceData) {
  let output = "<h2>Results</h2>"

  if (sourceData !== undefined) {
    sourceData.forEach(function(result) {
      let title = result.volumeInfo.title
      let authors = result.volumeInfo.authors
      let publisher = result.volumeInfo.publisher
      let imageUrl = result.volumeInfo.imageLinks.smallThumbnail
      let moreInfoLink = result.volumeInfo.infoLink

      output += `
        <div>
          <h3>${title}</h3>
          <p>Authors: ${authors}</p>
          <p>Publisher: ${publisher !== undefined ? publisher : "No publisher listed"}</p>
          <img src=${imageUrl}>
          <p><a href=${moreInfoLink}>More Information</a></p>
        </div>
      `;
    })
  }

  else {
    output += '<h3>No Results</h3>'
  };

  document.getElementById('results').innerHTML = output
};

function fetchData(source) {
  fetch(source)
  .then((response) => response.json())
  .then((data) => {

    displayResults(data.items);

  })
  .catch((error) => console.log(error))
};

document.getElementById('book-search').addEventListener('submit', function() {
  event.preventDefault();
  let search = document.getElementById('search').value
  let url = "https://www.googleapis.com/books/v1/volumes?q=" + search

  fetchData(url);
});