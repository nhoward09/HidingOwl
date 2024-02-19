const newP = document.createElement("p");
newP.textContent = "this is my new paragraph";

document.body.append(newP);


const newImage = document.createElement('img');
newImage.setAttribute("src", "https://picsum.photos/200");
document.body.append(newImage);

const varOne = "one"
const varTwo = "Two"
const varThree = "Three"


const newDiv = document.createElement("div");
newDiv.innerHTML = `<ul><li>${varOne}</li><li>${varTwo}</li><li>${varThree}</li></ul>`;
document.body.appendChild(newDiv);