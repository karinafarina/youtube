
$("document").ready(function() {
console.log("Here");
  var YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";
  
  function getDataFromApi(searchTerm, callback) {
    var query = {
      part: "snippet",
      key: "AIzaSyAuQdJmLgDckMmHbOLCqkxAz81L7OsonN0",
      q: searchTerm
    };
  console.log(".line 10");
    $.getJSON(YOUTUBE_BASE_URL, query, function(data, status, z) {
      console.log("data", data, "status", status, "z", z);
      console.log(data.items);
      for(var i = 0; i < data.items.length; i++) {
        console.log(data.items[i]);
        const item = data.items[i]; 
        if(item.id.kind !== "youtube#channel") {
          $(".js-search-results").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ item.id.videoId + '" frameborder="0" allowfullscreen>' + item.id.videoId + '"><img class="thumbnail" src="' + item.snippet.thumbnails.default.url + '"></iframe>');
        } else {
          console.log("==youtube#channel");
        } 
      }
    });
  }

  $("button").click(function(event) {
    event.preventDefault();
    console.log("clicked");
    getDataFromApi($("#search-box").val());
  })
});



