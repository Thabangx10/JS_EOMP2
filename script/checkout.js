// Create a variable to contain your local object 

let checkOutList = JSON.parse(localStorage.getItem('checkoutPage'));


// Create a function that wil iterate through our local object and display each property in outr HTML, tagerting our class element 'Checkout'

function checkout() {
    let checkoutList = JSON.parse(localStorage.getItem('checkoutPage')) || [];
    let checkoutTable = document.querySelector('.Checkout');
    let totalCost = 0;
  
    checkoutList.forEach((item) => {
      let row = document.createElement('tr');
  
      let nameCell = document.createElement('td');
      nameCell.className = 'col-4';
      nameCell.innerHTML = `<span class="Type text-black">${item.title}</span>`;
  
      let quantityCell = document.createElement('td');
      quantityCell.className = 'col-4';
      quantityCell.innerHTML = '<span class="Type text-black">1</span>';
  
      let priceCell = document.createElement('td');
      priceCell.className = 'col-4';
      priceCell.innerHTML = `<span class="Type text-black">$${item.price}</span>`;
  
      row.appendChild(nameCell);
      row.appendChild(quantityCell);
      row.appendChild(priceCell);
  
      checkoutTable.appendChild(row);
  
      // Perform price calculation
      totalCost += item.price;
    });
  
    // Display total cost
    let totalRow = document.createElement('tr');
    totalRow.innerHTML = `
      <td class="col-8" colspan="2"><strong>Total:</strong></td>
      <td class="col-4"><strong>$${totalCost}</strong></td>
    `;
    checkoutTable.appendChild(totalRow);
  }
  

  // Call the checkout function when the page is loaded
  window.addEventListener('DOMContentLoaded', () => {
    checkout();
  });




  
  
  
  
  

// Using the same delete function we used in our 'admin.js'

function Delete(id) {
    localStorage.setItem('checkoutPage',JSON.stringify(checkOutList));
    document.querySelector('#delete');
    checkOutList.splice(id-1, 1)
    location.reload()    //Delete product, no need for reload
    localStorage.setItem('checkoutPage', JSON.stringify(checkOutList))
}

