var img = document.getElementById("asadasa");
var imgHeight = img.naturalHeight;
var imgWidth = img.naturalWidth;
var imgRatio = imgHeight / imgWidth;

$(document).ready(function(){
  $("a#esedese").text(imgRatio);
  if(imgRatio < 1){$("#asadasa").addClass("fitHeight");}
  if(imgRatio > 1){$("#asadasa").addClass("fitWidth");}
  if(imgRatio === 1){$("#asadasa").addClass("fitDefault");}
});

$(document).ready(function(){
  $(".fitWidth").css("width", imgWidth + "px");
  $(".fitHeight").css("height", imgHeight + "px");
});