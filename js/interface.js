// $(document).ready(function() {
//   $('button').click(function() {
//     $("button").removeClass("selected");
//     $(this).addClass("selected");
//     var flickrAPI = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
//     var animal = $(this).text();
//     var flickrOptions = {
//                         tags: animal,
//                         format: 'json'
//                         };
//     function displayPhotos(data) {
//       var photoHTML = '<ul>';
//       $.each( data.items, function(i, photo) {
//         photoHTML += '<li class="grid-25 tablet-grid-50">';
//         photoHTML += '<a href="'+ photo.link +'" class="image">';
//         photoHTML += '<img src="' + photo.media.m + '"></a></li>'
//       });
//       photoHTML += '</ul>';
//       $('#photos').html(photoHTML);
//       console.log(data)
//     };
//     $.getJSON(flickrAPI, flickrOptions, displayPhotos);
//   });
// });

$(document).ready(function(){

  $("#flickrSearch").click(function(event){
    event.preventDefault();
    var flickrAPI = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    var searchTerm = $("#searchTerm").val();
    var apiOptions = {
                      tags: searchTerm,
                      format: 'json'
                      };
    var template = Handlebars.compile(html)
    $.getJSON(flickrAPI, apiOptions, function(photos) {
      console.log(photos);
    });
  });

});
