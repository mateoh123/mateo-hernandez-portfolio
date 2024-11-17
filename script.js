window.onload = function () {
  setTimeout(function () {
    // XHR to request a JS and a CSS
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://domain.tld/preload.js");
    xhr.send("");
    xhr = new XMLHttpRequest();
    xhr.open("GET", "http://domain.tld/preload.css");
    xhr.send("");
    // preload image
    new Image().src = "/photography_icons/Untitled-1.png";
    new Image().src = "/photography_icons/sea_foam_icon.png";
  }, 10000);
};

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function resizeSketch(iframe, parentId, aspectRatio) {
  let parent = document.getElementById(parentId);
  let w = parent.clientWidth;
  iframe.width = w;
  iframe.height = w * aspectRatio;
  iframe.contentWindow.addEventListener("resize", () => {
    let w = parent.clientWidth;
    iframe.width = w;
    iframe.height = w * aspectRatio;
  });
}

// Get the modal
// create references to the modal...
var modal = document.getElementById("myModal");
// to all images -- note I'm using a class!
var images = document.getElementsByClassName("myImages");
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function (evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
