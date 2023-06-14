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
