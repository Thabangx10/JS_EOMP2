// Create an empty array that will be targeted to our checkout page so that everytime a user selects a product, it will automatically update the checkou.html page with that product that you have selected

let Checkout = [];

// Use the same technique to parse a object into a container, that we used in our 'admin.js'

let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
    {
        id: 1,
        name: 'Broken Mind',
        price: 25000,
        imageURL: 'https://i.postimg.cc/FFB3fwYm/Thought-Provoking_Sculpture_of_Split_Head_Reveals_a_Hauntingly_Surreal_Skull_Within.jpg',
        type: 'Sculpture'
    },
    {
        id: 2,
        name: 'End Of Silence',
        price: 62000,
        imageURL: 'https://i.postimg.cc/CxMBb0Fm/pexels-steve-johnson-1572386.jpg',
        type: 'Painting'
    }, 
    {
        id: 3,
        name: 'Cry For Help',
        price: 28000,
        imageURL: 'https://i.postimg.cc/x8JkyTXQ/pexels-marcio-skull-13569998_(1).jpg',
        type: 'Sculpture'
    }, 
    {
        id: 4,
        name: 'Stuck In My Ways',
        price: 25000,
        imageURL: 'https://i.postimg.cc/wMck3CJK/pexels-jo-o-cabral-3299386.jpg',
        type: 'Photograph'
    }, 
    {
        id: 5,
        name: 'Water Of Youth',
        price: 10000,
        imageURL: 'https://i.postimg.cc/GpRznP5g/pexels-gabriel-peter-719396.jpg',
        type: 'Photograph'
    }, 
    {
        id: 6,
        name: 'Dare To Dream',
        price: 76000,
        imageURL: 'https://i.postimg.cc/903w9qM7/pexels-dids-2911545.jpg',
        type: 'Painting'
    },
    {
        id: 7,
        name: 'Hear No Evil',
        price: 30000,
        imageURL: 'https://i.postimg.cc/D09SCkGX/pexels-zack-jarosz-1727658.jpg',
        type: 'Sculpture'
    },
    {
        id: 8,
        name: 'Whisper In the Dark',
        price: 80000,
        imageURL: 'https://i.postimg.cc/J0c0B6vf/pexels-steve-johnson-1690351.jpg',
        type: 'Painting'
    },
    {
        id: 9,
        name: 'Praying',
        price: 20000,
        imageURL: 'https://i.postimg.cc/x1rm5HG4/pexels-rodolfo-clix-4492788.jpg',
        type: 'Sculpture'
    },
    {
        id: 10,
        name: 'Off The Edge',
        price: 22000,
        imageURL: 'https://i.postimg.cc/sXWmCQgg/pexels-tim-grundtner-3856635.jpg',
        type: 'Photograph'
    },
    {
        id: 11,
        name: 'Fading Away',
        price: 90000,
        imageURL: 'https://i.postimg.cc/JzTyqF0m/pexels-anni-roenkae-2832382.jpg',
        type: 'Painting'
    },
    {
        id: 12,
        name: 'Stranded Alone',
        price: 14000,
        imageURL: 'https://i.postimg.cc/L8yNtFW2/pexels-zukiman-mohamad-398467.jpg',
        type: 'Photograph'
    }
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
