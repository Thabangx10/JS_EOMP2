// Create an empty array that will be targeted to our checkout page so that everytime a user selects a product, it will automatically update the checkou.html page with that product that you have selected

var checkoutItems = [];


// Use the same technique to parse a object into a container, that we used in our 'admin.js'

// Function to save products to local storage
function saveProductsToLocalStorage() {
    localStorage.setItem("products", JSON.stringify(products));
  }
  
  // Function to get products from local storage
  function getProductsFromLocalStorage() {
    var storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      products = JSON.parse(storedProducts);
    }
  }
  
  // Function to add a product
  function addProduct(title, image, price, category) {
    var product = {
      id: products.length + 1,
      title: title,
      image: image,
      price: price,
      category: category,
    };
  
    products.push(product);
    saveProductsToLocalStorage();
  }
  
// Function to filter products by price
function filterProductsByPrice() {
    var filterButton = document.getElementById("filterPrice");
    filterButton.addEventListener("click", function() {
      // Sort the products by price in ascending order
      var sortedProducts = products.sort(function(a, b) {
        return a.price - b.price;
      });
  
      // Display the sorted products
      displayProducts(sortedProducts);
    });
}

// Function to display the products
function displayProducts(products) {
    var propertyContainer = document.querySelector(".property");
    propertyContainer.innerHTML = ""; // Clear previous products
  
    // Loop through the products array
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
  
      // Create HTML elements for product display
      var productElement = document.createElement("div");
      productElement.classList.add("col-lg-4", "col-md-6", "mb-4");
      productElement.innerHTML = `
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">Price: $${product.price}</p>
            <p class="card-text">Category: ${product.category}</p>
            <button class="btn btn-primary custom-btn" onclick="addToCheckout(${product.id})">Add to Checkout</button>
          </div>
        </div>
      `;
  
      // Append the product element to the container
      
      propertyContainer.appendChild(productElement);
    }
  }

// Function to add a product to checkout

function addToCheckout(productId) {
  var product = products.find((p) => p.id === productId);
  if (product) {
    var checkoutList = JSON.parse(localStorage.getItem('checkoutPage')) || [];
    checkoutList.push(product);
    localStorage.setItem('checkoutPage', JSON.stringify(checkoutList));
    alert("Product added to checkout!");
  }
}


  
  // Call the getProductsFromLocalStorage function to load products from local storage
  getProductsFromLocalStorage();
  
  // Call the displayProducts function to show the products on page load
  displayProducts(products);
  
  // Call the filterProductsByPrice function to enable filtering by price
  filterProductsByPrice();
  

  
  



// Implement logic for our buttons using functions whilst also creating a checkout button function


// Checkout button
// function checkoutButton(item) {
//     checkoutItems.push(item);
//     console.log(checkoutItems);
//     localStorage.setItem('checkoutPage', JSON.stringify(checkoutItems));
// }
// checkoutButton();
