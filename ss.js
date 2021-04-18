let pics = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png"];
var i = 0;
let img = document.getElementById("img");

function picForward() {
  i += 1;
  i %= pics.length;

  img.src = "pics/" + pics[i];
}

function picBack() {
  i += pics.length - 1;
  i %= pics.length;
  img.src = "pics/" + pics[i];
}
