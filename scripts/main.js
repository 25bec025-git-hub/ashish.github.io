// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Hello Karate Cadets!";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://antelopetourandtravel.com/wp-content/uploads/2022/07/chambaintro.webp") {
    myImage.setAttribute("src", "../images/chamba-2.jpg");
  } else {
    myImage.setAttribute("src", "https://antelopetourandtravel.com/wp-content/uploads/2022/07/chambaintro.webp");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Carate Cadet , ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;

}
myButton.addEventListener("click", () => {
  setUserName();
});