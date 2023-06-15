let products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : [
    {
        id: 1,
        title: "Luxury Villa",
        description: "Beautiful villa with stunning views",
        price: 500000,
        image: "https://i.postimg.cc/J7NdV8My/villa.jpg",
        category: "Luxury"
    },
    {
        id: 2,
        title: "Beachfront Condo",
        description: "Spacious condo right on the beach",
        price: 250000,
        image: "https://i.postimg.cc/fb5Tgpy1/condo.jpg",
        category: "Beachfront"
    },
    {
        id: 3,
        title: "Luxury Villa",
        description: "Beautiful villa with stunning views",
        price: 500000,
        image: "https://i.postimg.cc/J7NdV8My/villa.jpg",
        category: "Suburban"
    },
    {
        id: 4,
        title: "Beachfront Condo",
        description: "Spacious condo right on the beach",
        price: 250000,
        image: "https://i.postimg.cc/fb5Tgpy1/condo.jpg",
        category: "City"
    },
    {
        id: 5,
        title: "Beachfront Condo",
        description: "Spacious condo right on the beach",
        price: 250000,
        image: "https://i.postimg.cc/fb5Tgpy1/condo.jpg",
        category: "Beachfront"
    },
];

function displayAdmin() {
    products.forEach((product) => {
        document.querySelector('.products').innerHTML += `
        <tr>
            <th class="col-2"><span class="Type text-black">${product.id}</span></th>
            <th class="col-2"><span class="Type text-black">${product.category}</span></th>
            <th class="col-2"><span class="Type text-black">${product.title}</span></th>
            <th class="col-2"><span class="Type text-black">R${product.price}</span></th>
            <th class="col-2"><span class="Type text-black">
                <button type="button" class="delete" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </span></th>
            <th class="col-2"><span class="Type text-black">
                <button type="button" class="edit" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i>
                </button>
            </span></th>
        </tr>`;
    });
}

function deleteProduct(productId) {
    products = products.filter((product) => product.id !== productId);
    updateLocalStorage();
    refreshTable();
}

function updateLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

function refreshTable() {
    document.querySelector('.products').innerHTML = '';
    displayAdmin();
}

displayAdmin();


function editProduct(productId) {
    var product = products.find((p) => p.id === productId);
    if (product) {
      var titleInput = document.getElementById("titleInput");
      var categoryInput = document.getElementById("categoryInput");
      var priceInput = document.getElementById("priceInput");
  
      titleInput.value = product.title;
      categoryInput.value = product.category;
      priceInput.value = product.price;
  
      // Display save button
      var saveButton = document.getElementById("saveButton");
      saveButton.style.display = "inline-block";
      saveButton.dataset.productId = productId;
      saveButton.addEventListener("click", saveProductChanges);
    }
  }
  
  function saveProductChanges(event) {
    event.preventDefault();

    var productId = parseInt(event.target.dataset.productId);
    var titleInput = document.getElementById("titleInput");
    var categoryInput = document.getElementById("categoryInput");
    var priceInput = document.getElementById("priceInput");
  
    var productIndex = products.findIndex((p) => p.id === productId);
    if (productIndex !== -1) {
      products[productIndex].title = titleInput.value;
      products[productIndex].category = categoryInput.value;
      products[productIndex].price = parseFloat(priceInput.value);
  
      updateLocalStorage();
      refreshTable();
      clearInputFields();
    }
  
    // Hide save button
    event.target.style.display = "none";

    var modal = document.getElementById("editModal");
    var bootstrapModal = bootstrap.Modal.getInstance(modal);
    bootstrapModal.hide();
  }
  
  function clearInputFields() {
    var titleInput = document.getElementById("titleInput");
    var categoryInput = document.getElementById("categoryInput");
    var priceInput = document.getElementById("priceInput");
  
    titleInput.value = "";
    categoryInput.value = "";
    priceInput.value = "";
  }

  function addNewProduct(event) {
    event.preventDefault();
  
    var titleInput = document.getElementById("titleInput");
    var descriptionInput = document.getElementById("descriptionInput");
    var priceInput = document.getElementById("priceInput");
    var imageInput = document.getElementById("imageInput");
    var categoryInput = document.getElementById("categoryInput");
  
    var newProduct = {
      id: products.length + 1,
      title: titleInput.value,
      description: descriptionInput.value,
      price: parseFloat(priceInput.value),
      image: imageInput.value,
      category: categoryInput.value,
    };
  
    products.push(newProduct);
    updateLocalStorage();
    refreshTable();
    clearInputFields();
  
    // Hide modal
    var modal = document.getElementById("addModal");
    var bootstrapModal = bootstrap.Modal.getInstance(modal);
    bootstrapModal.hide();
  }
  
  document.getElementById("addForm").addEventListener("submit", addNewProduct);