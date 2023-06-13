// Create an empty array that will be targeted to our checkout page so that everytime a user selects a product, it will automatically update the checkou.html page with that product that you have selected

let Checkout = [];

// Use the same technique to parse a object into a container, that we used in our 'admin.js'

let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
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
        category: "Surbarbian"
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

]



//  Set your items object array to localStorage

localStorage.setItem('items', JSON.stringify(items));

// Create a container that will hold the targeted element

let property = document.querySelector('.property')

// Create a function that will also iterate through the object array and display each property within object array and display them in our targeted element

function display() {
    products.forEach((item) => {
        property.innerHTML += `
        
        <div class="card">
        <img src="${item.imageURL}" alt="Image1">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="price">Price: R${item.price}</p>
            <button type="button" class="PurchaseButton" onclick='checkoutButton(${JSON.stringify(item)})'>Purchase</button>
        </div>
        </div>

        
        `
    });
}
display();

// We are now going to create and a function to sort our property based on filtered length on our object array.

function sort() {
    property.innerHTML = " "

    let filter = products.filter((item) => {
        return item.type.toLowerCase() == type.toLowerCase();
    })

    for (let i = 0; i < filter.length; i++) {
        
        property.innerHTML += `
        
        <div class="card">
        <img src="${filter[i].imageURL}" alt="Image1">
        <div class="card-body">
            <h5 class="card-title">${filter[i].name}</h5>
            <p class="price">Price: R${filter[i].price}</p>
            <button type="button" class="PurchaseButton" onclick='checkoutButton(${JSON.stringify(filter)})'>Purchase</button>
        </div>
        </div>

        
        `
        
    }
}



// Implement logic for our buttons using functions whilst also creating a checkout button function




// Checkout button
function checkoutButton(item) {
    Checkout.push(item);
    console.log(Checkout);
    localStorage.setItem('checkoutPage', JSON.stringify(Checkout));
}
