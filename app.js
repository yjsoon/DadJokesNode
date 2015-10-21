$(function() {

  $.get("/jokes", function(data){
    alert(data.setup);
    alert(data.punchline);
  },"json");

});
