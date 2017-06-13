//TAMAÑO DE LA HOJA

$(document).ready(function(){
  var imgPrinHeight = $("div#imgPrin").height();
  var imgPrinWidth = imgPrinHeight*70/99;
  $("div#imgPrin").css("width", imgPrinWidth);
  $("div#buttons").css("width", imgPrinWidth);
  $("a#asadasa").text(Math.floor(imgPrinHeight) + "px" + "/" + Math.floor(imgPrinWidth) + "px");
});

//CONTADOR DE PAGINA

$(document).ready(function(){
  var page = 1;
  if(page < 10){page = "00" + page};
  if(page > 10 && page < 100){page = "0" + page};
  $("#esedese").text(page);
  $("#imgPrin").css("background-image", "url(src/test/" + page + ".jpg)");

  $("#button1").click(function(){
    if(page = "00" + page){page = page - "00"};
    if(page = "0" + page){page = page - "0"};
    page -= 1;
    if(page < 10){page = "00" + page};
    if(page > 10 && page < 100){page = "0" + page};
    $("#esedese").text(page);
    $("#imgPrin").css("background-image", "url(src/test/" + page + ".jpg)");
  });

  $("#button2").click(function(){
    if(page = "00" + page){page = page - "00"};
    if(page = "0" + page){page = page - "0"};
    page += 1;
    if(page < 10){page = "00" + page};
    if(page > 10 && page < 100){page = "0" + page};
    $("#esedese").text(page);
    $("#imgPrin").css("background-image", "url(src/test/" + page + ".jpg)");
  });
});
