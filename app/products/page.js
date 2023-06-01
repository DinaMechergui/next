import React, { Suspense } from "react";
import ProductList from '@/compnents/productList';
import CategoryList from '@/compnents/categoryList';
async function getProducts(){
const res= await fetch('http://localhost:3001/api/articles')
const products = await res.json();
return products;
}
async function getCategries(){
const res= await fetch('http://localhost:3001/api/categories')
const categories = await res.json();
return categories;
}
const ProductsPage= async ()=> {
const products = await getProducts();
const categories = await getCategries();
return (
<>
<Suspense fallback={<p>Loading Categories...</p>}>
<CategoryList categories={categories} />
</Suspense> <br />
<Suspense fallback={<p>Loading Products...</p>}>
<ProductList products={products} />
</Suspense>
</>
)
}
export default ProductsPage