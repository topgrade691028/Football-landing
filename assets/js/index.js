document.addEventListener("scroll", function (e) {
  let starImg = document.getElementById("star-img");
  starImg.style.transform =
    "translate3d(0px, " + window.scrollY * -0.18 + "px, 0px)";
});
