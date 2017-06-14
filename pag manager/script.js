$(document).ready(function(){
  var page = 20;
  if(page < 10){page = "00" + page};
  if(page > 10 && page < 100){page = "0" + page};
  $("#asadasa").text(page);
});