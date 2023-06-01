import React from "react";
import dynamic from 'next/dynamic'
const AffTableCategories = dynamic(() =>
    import('@/compnents/AffTableCategories'), {
    loading: () => 'Loading...', ssr: false,
})
async function getProducts() {
    const res = await fetch('http://localhost:3001/api/categories', { cache: "no-store" })
    const categories = await res.json();
    return categories;
}
const tableCategories = async () => {
    const categories = await getProducts();
    return (
        <div className="container mx-auto  p-1" style={{ position: 'relative', top: '60px' }}>
            <AffTableCategories categories={categories} />
        </div>
    )
}
export default tableCategories; 