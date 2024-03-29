// Fetch and display products
const baseURL = "http://3.212.70.19"

// Products
const getProductsBtn = document.getElementById('getProducts');
getProductsBtn.addEventListener('click', () => {
  fetch(baseURL + '/api/products'
  ,{
    headers: {
      'X-Expected-Number': '1670',
    }
  })
  
    .then(res => res.json())
    .then(data => {
      displayProducts(data); 
    });
})

function displayProducts(products) {
  let html = '';
  products.forEach(product => {
    html += `
      <div>
        <h3>${product.title}</h3>
        <p>${product.genre}</p>
        <p>${product.releaseYear}</p>
      </div>
    `;
  });
  
  document.getElementById('products').innerHTML = html;
}


// Payments
const getPaymentsBtn = document.getElementById('getPayments');
getPaymentsBtn.addEventListener('click', () => {
  fetch(baseURL + '/api/payment'
  ,{
    headers: {
      'X-Expected-Number': '1670',
    }}
    )
    .then(res => res.json())  
    .then(data => {
      displayPayments(data);
    });
})

function displayPayments(payments) {
  let html = '';
  payments.forEach(payment => {
    html += `
      <div>
        <p>Amount: ${payment.amount}</p>
      </div>
    `;
  });

  document.getElementById('payments').innerHTML = html;
}

// Handle product submission
const addProductForm = document.getElementById('addProductForm');
addProductForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const genre = document.getElementById('genre').value;
  const releaseYear = parseInt(document.getElementById('releaseYear').value);

  const productData = {
    Title: title,
    Genre: genre,
    ReleaseYear: releaseYear
  };

  fetch(baseURL + '/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Expected-Number': '1670',
    },
    body: JSON.stringify(productData)
  })
  .then(response => response.json())
  .then(() => {
    // Clear form fields and display success message
  })
  .catch(error => console.error('Error adding product:', error));
});

// Fetch and display payments
fetch(baseURL + '/api/payment')
  .then(response => response.json())
  .then(payments => {
    const paymentsList = document.getElementById('payments');
    paymentsList.innerHTML = '';
    payments.forEach(payment => {
      const paymentItem = document.createElement('li');
      paymentItem.textContent = `Payment Amount: ${payment.Amount}`;
      paymentsList.appendChild(paymentItem);
    });
  })
  .catch(error => console.error('Error fetching payments:', error));

// Handle payment submission
const makePaymentButton = document.getElementById('makePaymentButton');
makePaymentButton.addEventListener('click', (event) => {
  event.preventDefault();

  const amount = parseInt(document.getElementById('amount').value);

  const paymentData = {
    Amount: amount
  };

  fetch(baseURL + '/api/payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Expected-Number': '1670',
    },
    body: JSON.stringify(paymentData)
  })
  .then(response => response.json())
  .then(() => {
    // Clear form fields and display success message
  })
  .catch(error => console.error('Error making payment:', error));
});
