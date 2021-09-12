const color1 = document.getElementById("theme1").addEventListener("click", () => {

  document.body.style.backgroundColor = "pink";

});

const color2 = document.getElementById("theme2").addEventListener("click", () => {

  document.body.style.backgroundColor = "rgb(98, 226, 226)";

});

const color3 = document.getElementById("theme3").addEventListener("click", () => {

  document.body.style.backgroundColor = "rgb(15, 211, 32)";

});

const color4 = document.getElementById("theme4").addEventListener("click", () => {

  document.body.style.backgroundColor = "coral";

});

const color5 = document.getElementById("theme5").addEventListener("click", () => {

  document.body.style.backgroundColor = "yellow";

});

const dark = document.getElementById("btn").addEventListener('click', () => {

  const ml = document.querySelector(":root");
  if(ml.style.getPropertyValue("--margin-left") == "19px") {
    ml.style.setProperty("--margin-left", "-5px");
  }else{
    ml.style.setProperty("--margin-left", "19px");
  }

  if(document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor = "white";
    document.getElementsByTagName("h2")[0].style.color = "black"
  }else{
    document.body.style.backgroundColor = "black";
    document.getElementsByTagName("h2")[0].style.color = "white"
  }
});

const clear = document.getElementById("clear").addEventListener('click', () => {
  localStorage.clear();
  show();
})



