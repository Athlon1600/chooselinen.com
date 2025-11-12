const productList = document.createElement("div");
productList.classList.add("product-list");

function addProductTile(product) {
  const productTile = document.createElement("div");
  productTile.classList.add("product-tile");
  const thumbnailImage = document.createElement("img");
  thumbnailImage.src = product.thumbnailImageUrl;
  thumbnailImage.alt = product.shortDescription;
  const longDescriptionParagraph = document.createElement("p");
  longDescriptionParagraph.textContent = product.longDescription;
  const priceParagraph = document.createElement("p");
  priceParagraph.classList.add("product-price");
  priceParagraph.textContent = product.price;
  productTile.append(thumbnailImage, longDescriptionParagraph, priceParagraph);
  productList.appendChild(productTile);
}

fetch("./data/products.json")
  .then((response) => response.json())
  .then((value) => value.forEach(addProductTile));

document.querySelector("main").appendChild(productList);
