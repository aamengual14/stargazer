 $(document).ready(function(){
    $('#search').on('submit', function(event) {
      event.preventDefault();
      var starSearch = $("#search-name").val();
      search(starSearch);

    });

});


 function search(name) {
    var api = 'http://www.strudel.org.uk/lookUP/json/?name='+ name;
    $.ajax({
      url: api,
      dataType: 'jsonp',
      jsonpCallback: "showImage"
    })
}

function showImage(response) {
  var image = response.image.src;
  $('#preview').html(`<div><img src="${image}" /></div>`)
}
