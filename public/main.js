$(".content").each(function(index, element) {
  var text = $(element).text();
  var words = text.split(' ');
  $(element).html('');
  
  for(var i in words) {
    var word = words[i];
    $(element).append('<a href="#" title="This is a test.">' + word + '</a> ');
  }
});

$(document).tooltip();