const header = document.createElement("header");
const underConstructionBanner = document.createElement("div");
underConstructionBanner.classList.add("under-construction-banner");
underConstructionBanner.textContent = "Under construction";
const navigationBar = document.createElement("nav");
const navigationLinkList = document.createElement("ul");
const headerImage = document.createElement("img");
headerImage.src = "./images/header.jpg";
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
  navigationLinkList.appendChild(linkItem);
}

addLink("Home", "./index.html");
addLink("Collection", "./collection.html");
addLink("Etsy", "https://www.etsy.com/shop/ChooseLinen", "etsy-link");
addLink("Contact", "./contact.html");

navigationBar.appendChild(navigationLinkList);
header.append(underConstructionBanner, navigationBar, headerImage);
document.body.appendChild(header);
