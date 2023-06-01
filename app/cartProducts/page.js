import React from "react";
import CartProductList from '@/compnents/CartProductList';
async function getProducts(){
 //
 const res= await fetch('http://localhost:3001/api/articles')
 const products = await res.json();
 return products;
}
const CartProductsPage= async ()=> {
 const products = await getProducts();
 return (
 <>

 <CartProductList products={products} />

 </>
 )
}
export default CartProductsPage;