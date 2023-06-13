// Convert my array using 'parse' and the teranary operator to validate our data.
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

];


// Create a function using forEach and target my 'tbody' to display my data in my object

// let tbody = document.querySelector('.tbody');

function displayAdmin() {
    Object.keys(products).forEach((item) =>{
        document.querySelector('.products').innerHTML += `
        
        <tr>
        <th class="col-2"><span class="Type text-black">${products[item].id}</span></th>
        <th class="col-2"><span class="Type text-black">${products[item].type}</span></th>
        <th class="col-2"><span class="Type text-black">${products[item].name}</span></th>
        <th class="col-2"><span class="Type text-black">R${products[item].price}</span></th>
        <th class="col-2"><span class="Type text-black">
            <button type="button" class="delete" onclick = "DeleteButton(${products[item].id})"><i class="fa-solid fa-trash"></i></button></span>
        </th>
        <th class="col-2"><span class="Type text-black">
            <button type="button" button id="edit-button" data-bs-toggle="modal" data-bs-target="#editProduct">
                <i class="fa-solid fa-pen-to-square"></i></span>
            </th>
        </button>
        <!-- Modal -->
        <div class="modal fade" id="editProduct" tabindex="-1" aria-labelledby="editProductLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editProductLabel">Edit Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="form g-2">
                            <div class="container">
                                <input class="form-control" type="text" id="type1" value='${products[item].type}' required>
                                <textarea class="form-control my-2" id="name1">${products[item].name} required</textarea>
                                <input class="form-control" id="price1" type="number" value='${products[item].price}' required>
                                <input class="form-control my-2" id="imageURL1" type="url" value='${products[item].imageURL}' required>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer my-2">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success" id="Save">Save changes</button>
                    </div>
                </div>
            </div>
        </div>        
    </tr>

        
        `
    })
}
displayAdmin();

// Set your 'products' to your localStorage

localStorage.setItem('products', JSON.stringify(products))

// Create a function to delete your data within our products object with the ue of splice and a built in function to avoid seeing up to date products after deleting , without the need to reload.

function DeleteButton(id) {
    localStorage.setItem('products',JSON.stringify(products));
    document.querySelector('#delete');
    products.splice(id-1, 1)
    location.reload()    //Delete product, no need for reload
    localStorage.setItem('products', JSON.stringify(products))
}


// Create a addition function that will get our 'Add' class and when we click on our button, we will apply preventDefault()

let Add = document.querySelector('.Add') 
// console.log(Add.outerHTML);
Add.addEventListener('click', (e)=>{
    e.preventDefault();
    let id = document.querySelector('#id').value;
let name = document.querySelector('#name').value;
let price = document.querySelector('#price').value;
let imageURL = document.querySelector('#imageURL').value;
let type = document.querySelector('#type').value;

// We need to push an object in the local array, to update the array.

products.push({
    id,
    name,
    price,
    imageURL,
    type
})


// Apply some localStorage validation using debugging tools

location.reload()

localStorage.setItem('products', JSON.stringify(products));
console.table(JSON.parse(localStorage.products));
});