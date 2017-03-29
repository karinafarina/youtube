
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

$.getJSON(YOUTUBE_BASE_URL, query, function(x, y, z) {
  console.log("first", x, "second",y, "third", z);
  console.log(x.items);
  for(var i = 0; i < x.items.length; i++) {
    console.log(x.items[i]);
    const item = x.items[i]; 

    $(".js-search-results").append("<li>" + item.snippet.channelTitle + "<img src='"+ item.snippet.thumbnails.default.url + "'</li>");
  }

});

}

$("button").click(function(event) {
  event.preventDefault();
  console.log("clicked");
  getDataFromApi($("#search-box").val());

})



});













/*
function getDataFromApi(searchTerm, callback) {
  var query = {
    part: "snippet",
    key: "AIzaSyAuQdJmLgDckMmHbOLCqkxAz81L7OsonN0",
    q: searchTerm,
   
  };
  $.getJSON(YOUTUBE_BASE_URL, query, showYouTubeData);
  console.log(query.q);
  console.log(query.q[0]);
}


function showYouTubeData(data) {
  console.log(data);
  var resultElement = '';
  if (data.items) {
    console.log(data);
    console.info("Data is here");
    console.info(typeof data.items);
    console.log(data.items[0].snippet.thumbnails.default.url);
    data.items.forEach(function(item) {
     resultElement += '<p>' + item.snippet.title
      + '</p>';
      resultElement += '<a href="https://www.youtube.com/watch?v=' + item.id.videoId + '"><img class="thumbnail" src="' + item.snippet.thumbnails.default.url
      + '"/></a>';
     console.log(item.snippet.title);
     
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(event) {
    event.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, showYouTubeData);
  })
}
$(function(){watchSubmit();});
*/