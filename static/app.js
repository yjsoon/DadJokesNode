$(function() {

  setupJoke();

  $('button').on("click", function() {
    setupJoke();
  });

  $('#upvote').on("click", function() {
    $.post("/upvote");
  });

});

var setupJoke = function() {
  $.get("/jokes", function(data){
    var setupString = data.setup;
    var punchlineString = data.punchline;
    $('#setup').html(setupString);
    $('#punchline').html(punchlineString);
  },"json");
}
