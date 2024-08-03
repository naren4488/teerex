import { CartItem } from "@/types";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const cartItemsData = localStorage.getItem("cartItems");
    if (cartItemsData) {
      setCartItems(JSON.parse(cartItemsData));
    }
    setLoading(false);
  }, []);

  console.log("shopping cart", cartItems);
  return (
    <div className="bg-red-200 px-4 lg:px-12 py-2">
      {loading && <div className="text-2xl font-semibold">Loading...</div>}
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <div className="p-4 bg-gray-200 shadow-md rounded">
            <p>{cartItem.name}</p>
            <p>{cartItem.price}</p>
            <p>{cartItem.quantity}</p>
          </div>
        ))
      ) : (
        <p className="text-2xl font-semibold">
          Cart is Empty, Please add some items to continue
        </p>
      )}
    </div>
  );
};

export default CartPage;
