$(".btn-date").mouseenter(function() {
    document.getElementById('date').innerHTML = Date();
});
$(".btn-date").mouseleave(function() {
    document.getElementById('date').innerHTML = "";
})

var myButton = document.getElementById("topBtn");
window.onscroll = function() { scrollfunction() };

function scrollfunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
    x.className += " responsive";
    } else {
    x.className = "nav";
    }
}