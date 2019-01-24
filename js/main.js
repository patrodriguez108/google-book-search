function bookSearch() {
  var search = document.getElementById('search').value
  document.getElementById('results').innerHTML = ""

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",

    success: function(data) {
      for(var i = 0; i < data.items.length; i++) {
        results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>" + "<p>Authors: " + data.items[i].volumeInfo.authors + "</p>" + "<p>Publisher: " + data.items[i].volumeInfo.publisher + "</p>" + "<img src=" + data.items[i].volumeInfo.imageLinks.smallThumbnail + ">" + "<a href=" + data.items[i].volumeInfo.infoLink + ">" + "More Information</a>" 
      }
    },

    type: 'GET'
  });
}

document.getElementById('button').addEventListener('click', bookSearch, false)