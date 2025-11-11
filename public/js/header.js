const headerElement = document.createElement("header");
const navElement = document.createElement("nav");
const linkListElement = document.createElement("ul");
const headerImage = document.createElement("img");
headerImage.src = "./images/header_full.jpg";
headerImage.alt = "Header";

function addLink(text, href, id) {
  const linkItem = document.createElement("li");
  const link = document.createElement("a");
  link.textContent = text;
  link.href = href;
  if (id) {
    link.id = id;
  }
  linkItem.appendChild(link);
  linkListElement.appendChild(linkItem);
}

addLink("Home", "./index.html");
addLink("Collection", "./collection.html");
addLink("Etsy", "https://www.etsy.com/shop/ChooseLinen", "etsy-link");
addLink("Contact", "./contact.html");

navElement.appendChild(linkListElement);
headerElement.appendChild(navElement);
headerElement.appendChild(headerImage);
document.body.appendChild(headerElement);
