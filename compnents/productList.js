import React from 'react';
import Link from 'next/link';
async function getProducts(){
const res= await fetch('http://localhost:3001/api/articles')
const products = await res.json();
return products;
}
const ProductList= async ()=> {
const products = await getProducts();
return (
    <section style={{ width: '90vw', height: '90vh' }}>
      <div className="container">
        <div className="row">
          {products?.map((product) => (
            <div key={product?._id} className="col-lg-4 mb-4 mb-lg-0 pt-4">
              <div className="card h-100">
                <img
                  src={product.imageart}
                  className="card-img-top p-5"
                  height={320}
                  width={100}
                  alt={product.designation}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <Link href={`/products/${product._id}`}>
                      <h5 className="mb-0">{product.designation}</h5>
                    </Link>
                    <h5 className="text-dark mb-0">${product.prix}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProductList