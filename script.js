//TAMAÑO DE LA HOJA

$(document).ready(function(){
  var imgPrinHeight = $("div#imgPrin").height();
  var imgPrinWidth = imgPrinHeight*70/99;
  $("div#imgPrin").css("width", imgPrinWidth);
  $("div#buttons").css("width", imgPrinWidth);
  $("a#asadasa").text(Math.floor(imgPrinHeight) + "px" + "/" + Math.floor(imgPrinWidth) + "px");
});

//CONTADOR DE PAGINA

var x = 1;
$("#esedese").text(x);
//if(x < 10){x = "00" + x};
//if (x < 100 && x < 10){x = "0" + x};

$("#button1").click(function(){
  //if(x < 10){x = "00" + x};
  x -= 1;
  $("#esedese").text(x);
  //if (x < 100 && x < 10){x = "0" + x};
  $("#imgPrin").css("background-image", "url(src/test/" + x + ".jpg");
});


$("#button2").click(function(){
  x += 1;
  $("#esedese").text(x);
  //if(x < 10){x = "00" + x};
  //if (x < 100 && x < 10){x = "0" + x};
  $("#imgPrin").css("background-image", "url(src/test/" + x + ".jpg");
});

$(document).ready(function(){
  $("#imgPrin").css("background-image", "url(src/test/" + x + ".jpg");
});