document.getElementById('button').addEventListener('click', function() {
  var search = document.getElementById('search').value
  var url = "https://www.googleapis.com/books/v1/volumes?q=" + search
  document.getElementById('results').innerHTML = ""

  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    for(var i = 0; i < data.items.length; i++) {
        results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>" + "<p>Authors: " + data.items[i].volumeInfo.authors + "</p>" + "<p>Publisher: " + data.items[i].volumeInfo.publisher + "</p>" + "<img src=" + data.items[i].volumeInfo.imageLinks.smallThumbnail + ">" + "<a href=" + data.items[i].volumeInfo.infoLink + ">" + "More Information</a>" 
    }
  })
})