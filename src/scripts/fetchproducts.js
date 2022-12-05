async function getProducts() {
  let url = ' http://localhost:4000/owner/getallinventory';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function renderProducts() {
  let product = await getProducts();
  let html = '';
  product.forEach(product => {
      let htmlSegment = `<div class="col">
      <div class="card text-white bg-success my-4">
        <div class="card-body">
          <h5 class="card-title">${product.productId}</h5>
          <p class="card-text">${product.productName} <br>
          <p class="card-text">${product.productCategory} <br>
          <p class="card-text">${product.productAmount} <br>
          <p class="card-text">${product.productQty} <br>
          </p>
          <a class="btn  btn-outline-light rounded-pill" style="background-color: #de5499" href="./StudentsList.html" role="button">View Students</a>
        </div>
      </div>
    </div>`;

      html += htmlSegment;
  });

  let container = document.getElementById('product-grid');
  container.innerHTML = html;
}

renderProducts();