console.log("Cieszę się, że zaglądasz do konsoli. Widzisz errory? Pojawiają się jak wciskasz klawisze uruchomiające konsolę. Jak ich nie wciskasz, to nie ma errorów ;) It's not a bug, it's a feature! A tak serio to ma to związek z dodaniem obsługi strony przez klawiaturę i pojawiają się kiedy wciskasz klawisze do których nie ma przypisanytch eventów, jeszcze nie wiem jak ich uniknąć zachowując obsługę klawiszami. Nie ma to wpływu na działanie strony. Chyba, że Ty wiesz, to daj znać ;)");

var modal = document.getElementById('myModal');

var active = document.querySelector(".hover") || document.querySelector(".hoverlist li");

var lis = document.getElementsByTagName("li");
var len = lis.length;
for (var i=0; i < len; i++) {
    lis[i].addEventListener("mouseover",function(e) {
      active.classList.remove("hover");
      active=e.target.parentNode.parentNode;
      active.classList.add("hover");
      active.querySelector('input').focus();
    });
}
document.addEventListener("keydown", function (e){
    active.classList.remove("hover");
    if (e.which == 40){
        active = active.nextElementSibling || active;
    }else if (e.which == 38){
        active = active.previousElementSibling || active;
    }else{
        active = e.target;
    }
    active.classList.add("hover");
    active.querySelector('input').focus();
});

var aText = new Array(
"Mam na imię Krzysiek, moim pierwszym komputerem był IBM 386 SLC. Od tego momentu pasjonują mnie komputery i uwielbiam grafikę 8-bit. Obecnie szukam pierwszej pracy jako front-end developer. Jeśli podoba Ci się to co robię, odezwij się!",
"Bez obaw, potrafię robić też strony, które wyglądają nowocześnie. Skończyłem bootcamp Javascript Developer: React w Coders Lab ;)"
);
var iSpeed = 30;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;

var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

var blink = document.getElementById('blink')
var home = document.querySelector(".hover")

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 32) {
        typewriter();
        blink.style.display = "none"
        // home.classList.add("hover");
        // home.querySelector('input').focus();
    } if (event.keyCode == 113) {
        modal.style.display = "block"
    } if  (event.keyCode == 27) {
        window.location = "index.html"
    } else {
        console.log("ała, za każdym razem jak mnie wciskasz, a nie mam funkcji, to robię błąd :(");
    }
});

var touch = document.getElementById("touch");
touch.addEventListener('touchstart', function(event){
    typewriter();
    touch.style.display = "none";
}, false)
