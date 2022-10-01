let products = [
  {
    title: 'Mozzarella',
    calories: 212,
    price: 5,
    isExpired: false,
    category: 'chesse',
    fabricationYear: 2022,
    isFavorite: true,
  },
  {
    title: 'Chocolate',
    calories: 500,
    price: 8,
    isExpired: false,
    category: 'sweets',
    fabricationYear: 2018,
    isFavorite: false,
  },
  {
    title: 'Ice-cream',
    calories: 565,
    price: 10,
    isExpired: false,
    category: 'sweets',
    fabricationYear: 2022,
    isFavorite: false,
  },
  {
    title: 'Milk',
    calories: 62,
    price: 6,
    isExpired: false,
    category: 'dairy products',
    fabricationYear: 2022,
    isFavorite: true,
  }
]



function displayProducts() {
  $("#products-tbody").text("")
  for (let i = 0; i < products.length; i++) {
    insertProductInTable(products[i]);
  }
  $("#total-price-span").text(computeTotalPrice())
  $("#total-calories-span").text(computeTotalCalories())
  $("#favorite-products-span").text(getFavoriteProductsTitles())
  $("#all-categories-span").text(getAllCategories())
  $("#name-min-price-span").text(getProductsDetailsWithMinPrice())
  // prodWithMinPriceSpan.innerHTML = JSON.stringify(getProductsDetailsWithMinPrice());
  $("#most-used-category-span").text(getMostUsedCategory())
  console.log("************", getNonFavProducts())

  console.log("************", JSON.stringify(getNonFavProducts()))

  let prod1 = getNonFavProducts();
  let temp = JSON.stringify(prod1)
  console.log(temp)
  let user = {name: "ana"}
  console.log(user)
  console.log(JSON.stringify(user))
  $("#nonfav-products-span").text(JSON.stringify(getNonFavProducts()))
  //nonFavProductsSpan.innerHTML = JSON.stringify(getNonFavProducts());
  favProdWithMinPrice.innerHTML = JSON.stringify(getFavProductWithMinPrice());
  favProdWithMinPrice.innerHTML = JSON.stringify(getFavProductWithMinPrice());
  nonFavProdWithMaxCalories.innerHTML = JSON.stringify(getNonFavProductWithMaxCalories());
  totalPriceFavProducts.innerHTML = computeTotalPriceOfFavProducts();
}


function getMinCaloriesFavProdThanInputNo() {
  let res = [];
  let contor = 0;
  let calInput = $("#fav-prod-min-kcal-input").val()
  for (let i = 0; i < products.length; i++) {
    if (products[i].calories < calInput) {
      res[contor++] = products[i].title;
    }
  }
  $("#nfav-prod-min-kcal-spa").text(res);
}
$("#fav-prod-min-kcal-button").click(getMinCaloriesFavProdThanInputNo)

function getNonFavProducts() {
  let res = [];
  let contor = 0;
  for (let i = 0; i < products.length; i++) {
    let prod = {
      title: products[i].title,
      category: products[i].category,
      calories: products[i].calories,
      price: products[i].price,
    }
    if (products[i].isFavorite === false) {
      res[contor++] = prod;
    }
  }
  return res;
}


function getFavProductWithMinPrice() {
  let prod = {};
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < products.length; i++) {
    if (products[i].price < min) {
      min = products[i].price;
      prod.title = products[i].title;
      prod.category = products[i].category;
      prod.calories = products[i].calories;
      prod.price = products[i].price;
    }
  }
  return prod;
}


function getNonFavProductWithMaxCalories() {
  let prod = {};
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > max) {
      max = products[i].price;
      prod.title = products[i].title;
      prod.category = products[i].category;
      prod.calories = products[i].calories;
      prod.price = products[i].price;
    }
  }
  return prod;
}


function computeTotalPriceOfFavProducts() {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].isFavorite === true) {
      sum += products[i].price;
    }
  }
  return sum;
}


function computeTotalPrice() {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum;
}

//b.
function computeTotalCalories() {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].calories;
  }
  return sum;
}

//c.
function getFavoriteProductsTitles() {
  let res = [];
  let contor = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].isFavorite === true) {
      res[contor++] = products[i].title;
    }
  }
  return res;
}

//d.
function getAllCategories() {
  let array = [];
  for (let i = 0; i < products.length; i++) {
    if (!array.includes(products[i].category)) {
      array.push(products[i].category);
    }
  }
  return array;
}


//e.
function getProductsDetailsWithMinPrice() {
  let min = Number.MAX_SAFE_INTEGER;
  let minPriceProduct = {};
  for (let i = 0; i < products.length; i++) {
    if (products[i].price < min) {
      min = products[i].price;
      minPriceProduct.name = products[i].title
      // minPriceProduct.price = products[i].price
      minPriceProduct.price = min
    }
  }
  return minPriceProduct;
}

//f.
function getMostUsedCategory() {
  let category1 = "cheese";
  let category2 = "sweets";
  let category3 = "dairy products";
  let contor1 = 0;
  let contor2 = 0;
  let contor3 = 0;
  let res1;
  let res2;
  let res3;
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === category1) {
      res1 = products[i].category;
      contor1++;
    }
    if (products[i].category === category2) {
      res2 = products[i].category;
      contor2++;
    }
    if (products[i].category === category3) {
      res3 = products[i].category;
      contor3++;
    }
  }
  if (contor1 > contor2 && contor1 > contor3) {
    return res1;
  }
  if (contor2 > contor1 && contor2 > contor3) {
    return res2;
  }
  if (contor3 > contor2 && contor3 > contor1) {
    return res3;
  }
}

// *******************************************

// function getMostUsedCategory() {
//   let mostUsedCategory;
//   let temp = contor;
//   for (let i = 0; i < products.length; i++) {
//    let contor = 0;
//     for (let j = 0; j < products.length; j++) {
//       if (products[i].category === products[j].category) {
//         temp = contor;
//         contor++;
//       }
//     }
//     if (contor > temp) {
//       mostUsedCategory = products[i].category
//     }
//   }
//   return mostUsedCategory;
// }

function insertProductInTable(product) {
  let newRow = $("<tr></tr>")

  let newTtleTd = $("<td></td>");
  newTtleTd.text(product.title);
  newRow.append(newTtleTd);

  let newCategoryTd = $("<td></td>");
  newCategoryTd.text(product.category);
  newRow.append(newCategoryTd);

  let newCaloriesTd = $("<td></td>");
  newCaloriesTd.text(product.calories);
  newRow.append(newCaloriesTd);

  let newPriceTd = $("<td></td>");
  newPriceTd.text(product.price);
  newRow.append(newPriceTd);

  let deleteTd = $("<td></td>");
  let deleteButton = $("<button>Delete</button>");
  deleteButton.click(deleteProduct)
  deleteTd.append(deleteButton)
  newRow.append(deleteTd);

  let favoriteTd = $("<td></td>");
  let favoriteButton;
  if (product.isFavorite) {
    favoriteButton = $('<button class="favorite-button" onclick = markFavoriteProduct(this)>Sterge favorit</button>')
  }
  else {
    favoriteButton = $('<button class="notfavorite-button" onclick = markFavoriteProduct(this)>Adauga favorit</button>');
  }
  favoriteTd.append(favoriteButton)
  newRow.append(favoriteTd);

  $("#products-tbody").append(newRow);
}


function addProduct() {
  let product = {};
  product.title = $("#title-input").val();
  product.category = $("#category-input").val();
  product.calories = $("#calories-input").val();
  product.price = $("#price-input").val();

  products[products.length] = product;
  insertProductInTable(product);
}
$("#create-button").click(addProduct);


function deleteProduct(buttonElement) {
  let trow = buttonElement.parentNode.parentNode;
  tbody.removeChild(trow);
  let productTitle = tr.cells[0].innerHTML;
  let prodIndex = getProductIndexByTitle(productTitle);
  removeProduct(prodIndex);
}


function removeProduct(prodIndex) {
  for (let i = prodIndex; i < products.length - 1; i++) {
    products[i] = products[i + 1];
  }
  products.length--;
}


function markFavoriteProduct(buttonElement) {
  let tr = buttonElement.parentNode.parentNode;
  let productTitle = tr.cells[0].innerHTML;
  let productIndex = getProductIndexByTitle(productTitle);
  products[productIndex].isFavorite = !products[productIndex].isFavorite
  displayProducts();
}

function getProductIndexByTitle(productTitle) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].title === productTitle) {
      return i;
    }
  }
}
//i.
function filterProducts() {
  tbody.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    // if ((categoryFilterInput.value != "" && products[i].category === categoryFilterInput.value) &&
    //   (titleFilterInput.value != "" && products[i].title === titleFilterInput.value)) {
    //   insertProductInTable(products[i]);
    // }
    if (products[i].category === $("#category-filter-input").val()) {
      insertProductInTable(products[i]);
    }
    if (products[i].title === $("#title-filter-input").val()) {
      insertProductInTable(products[i]);
    }
    if (products[i].price >= $("#min-price-filter-input").val() && products[i].price <= $("#max-price-filter-input").val()) {
      insertProductInTable(products[i]);
    }
    if (products[i].calories >= $("#min-calories-filter-input").val() && products[i].calories <= $("#min-calories-filter-input").val()) {
      insertProductInTable(products[i]);
    }
  }
}
$("#filter-button").click(filterProducts);


function sortProductsByPrice() {
  products.sort(sortByPrice);
  displayProducts();
}

function sortByPrice(prod1, prod2) {
  if (prod1.price > prod2.price) {
    return 1;
  }
  if (prod1.price < prod2.price) {
    return -1;
  }
  return 0;
}
$("#price-sort-button").click(sortProductsByPrice);


//g.
function sortProductsByCalories() {
  products.sort(sortByCalories);
  displayProducts();
}

function sortByCalories(prod1, prod2) {
  if (prod1.calories > prod2.calories) {
    return 1;
  }
  if (prod1.calories < prod2.calories) {
    return -1;
  }
  return 0;
}
$("#calories-sort-button").click(sortProductsByCalories);


//h. 
function sortProductsByCategory() {
  products.sort(sortByCategory)
  displayProducts();
}

function sortByCategory(p1, p2) {
  if (p1.category > p2.category) {
    return 1;
  }
  if (p1.category < p2.category) {
    return -1;
  }
  return 0;
}
$("#category-sort-button").click(sortProductsByCategory)


//r.
function storeFavoriteProducts() {
  document.cookie = "favorite-products=" + JSON.stringify(getFavoriteProductsTitles());
}

displayProducts()