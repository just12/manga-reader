//TAMAÑO DE LA HOJA

$(document).ready(function(){
  var imgPrinWidth = $("div#imgPrin").width();
  var imgPrinHeight = imgPrinWidth*99/70;
  $("div#imgPrin").css("height", imgPrinHeight);
  $("a#asadasa").text(Math.floor(imgPrinHeight) + "px" + "/" + Math.floor(imgPrinWidth) + "px");
});

//CONTADOR DE PAGINA

$(document).ready(function(){
  var page = 1;
  if(page < 10){page = "00" + page};
  if(page >= 10 && page < 100){page = "0" + page};
  $("#esedese").text(page + ".jpg");
  $("#imgPrin").css("background-image", "url(src/test/" + page + ".jpg)");

  $("#button1").click(function prevPag(){
    if(page = "00" + page){page = page - "00"};
    if(page = "0" + page){page = page - "0"};
    page -= 1;
    if(page < 10){page = "00" + page};
    if(page >= 10 && page < 100){page = "0" + page};
    $("#esedese").text(page + ".jpg");
    $("#imgPrin").css("background-image", "url(src/test/" + page + ".jpg)");
    window.scrollTo(0, 90000);
  });

  $("#button2").click(function nextPag(){
    if(page = "00" + page){page = page - "00"};
    if(page = "0" + page){page = page - "0"};
    page += 1;
    if(page < 10){page = "00" + page};
    if(page >= 10 && page < 100){page = "0" + page};
    $("#esedese").text(page + ".jpg");
    $("#imgPrin").css("background-image", "url(src/test/" + page + ".jpg)");
    window.scrollTo(0, 0);
  });
  
  $(document).keydown(function(e) {
    var keyPressed = e.keyCode;
    $("#isidisi").text(keyPressed);
    console.log(keyPressed);
    if (keyPressed === 65){
      if(page = "00" + page){page = page - "00"};
      if(page = "0" + page){page = page - "0"};
      page -= 1;
      if(page < 10){page = "00" + page};
      if(page >= 10 && page < 100){page = "0" + page};
      $("#esedese").text(page + ".jpg");
      $("#imgPrin").css("background-image", "url(src/test/" + page + ".jpg)");
      window.scrollTo(0, 90000);
    }
    if (keyPressed === 68){
      if(page = "00" + page){page = page - "00"};
      if(page = "0" + page){page = page - "0"};
      page += 1;
      if(page < 10){page = "00" + page};
      if(page >= 10 && page < 100){page = "0" + page};
      $("#esedese").text(page + ".jpg");
      $("#imgPrin").css("background-image", "url(src/test/" + page + ".jpg)");
      window.scrollTo(0, 0);
    }
    if (keyPressed === 87){window.scrollTo(0, 0);}
    var imgPrinWidth = $("div#imgPrin").width();
    var imgPrinHeight = imgPrinWidth*99/70;
    if (keyPressed === 83){window.scrollTo(0, 90000);}
  });
});
