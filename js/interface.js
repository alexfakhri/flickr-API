$(document).ready(function(){

  $("#flickrSearch").click(function(event){
    event.preventDefault();
    $( "#photoFeed" ).empty();
    var flickrAPI = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    var searchTerm = $("#searchTerm").val();
    var apiOptions = {
                      tags: searchTerm,
                      format: 'json'
                      };
    var html = $('#photoTemplate').html()
    var template = Handlebars.compile(html)
      function displayPhotos(data) {
        $.each( data.items, function(i, photos){
          $('#photoFeed').append(template(photos));
          console.log(data);

        });
      };
      $.getJSON(flickrAPI, apiOptions, displayPhotos);
  });

});
