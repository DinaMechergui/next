import CartProductItem from "./CartProductItem";

const CartProductList = ({ products }) => {
  return (
    <div className=" flex-wrap justify-content-center mx-auto gap-4 w-100 max-w-[900px]">
      {products?.map((product) => (
        <CartProductItem key={product?._id} product={product} />
      ))}
    </div>
  );
};

export default CartProductList;
