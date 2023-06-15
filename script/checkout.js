// Create a variable to contain your local object 

let checkOutList = JSON.parse(localStorage.getItem('checkoutPage'));


// Create a function that wil iterate through our local object and display each property in outr HTML, tagerting our class element 'Checkout'




  
  
  
  
  

// Using the same delete function we used in our 'admin.js'

function Delete(id) {
    localStorage.setItem('checkoutPage',JSON.stringify(checkOutList));
    document.querySelector('#delete');
    checkOutList.splice(id-1, 1)
    location.reload()    //Delete product, no need for reload
    localStorage.setItem('checkoutPage', JSON.stringify(checkOutList))
}

