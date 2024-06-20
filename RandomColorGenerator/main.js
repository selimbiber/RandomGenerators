function getRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = getRandomColor();

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;
