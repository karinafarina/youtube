
var YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";

function getDataFromApi(searchTerm, callback) {
  var query = {
    
    part: "snippet",
    key: "AIzaSyAuQdJmLgDckMmHbOLCqkxAz81L7OsonN0",
    q: "search"
  };
  $.getJSON(YOUTUBE_BASE_URL, query, callback);
}


function showYouTubeData(data) {
  var resultElement = '';
  if (data.Search) {
    data.Search.forEach(function(item) {
     resultElement += '<p>' + item.Title + '</p>';
     console.log(item.Title);
     
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
$(function()[watchSubmit();});



/*$(function() {
  var OMDB_BASE_URL = 'https://www.omdbapi.com/?';


  // this is the query structure -->  https://www.omdbapi.com/?s=mad%20max&r=json

  var paramaters = {
    s: 'Max Max',
    r: 'json'
  };

  function ShowData(results) {
    console.log('results ', results);
    console.log(results.Search);
    $.each(results.Search, function (i, v) {
      console.log('v is   ', v);
      $('ul').append('<li>' + v.Title + '</li>');
    });
  }

  // url to api, how to use the api, how to display the contents from an api. 
  $.getJSON(OMDB_BASE_URL, paramaters, ShowData);

});
*/