$(document).ready(function() {
  $("#button").on("click", function() {
    var search = $("#search").val()
    document.getElementById('results').innerHTML = ""

    $.ajax({
      method: "GET",
      url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
      dataType: "json"
    }).done(function(response) {
      for(var i = 0; i < response.items.length; i++) {
        results.innerHTML += "<h2>" + response.items[i].volumeInfo.title + "</h2>" + "<p>Authors: " + response.items[i].volumeInfo.authors + "</p>" + "<p>Publisher: " + response.items[i].volumeInfo.publisher + "</p>" + "<img src=" + response.items[i].volumeInfo.imageLinks.smallThumbnail + ">" + "<a href=" + response.items[i].volumeInfo.infoLink + ">" + "More Information</a>" 
      }
    })
  })
})