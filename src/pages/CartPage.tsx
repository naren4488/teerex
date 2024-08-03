import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartItem } from "@/types";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const cartItemsData = localStorage.getItem("cartItems");
    if (cartItemsData) {
      const cartDataArr: CartItem[] = JSON.parse(cartItemsData);
      setCartItems(cartDataArr);
      const total = cartDataArr.reduce((sum, item) => sum + item.price, 0);
      setTotalAmount(total);
    }
    setLoading(false);
  }, []);

  const handleIncOrDec = (isInc: boolean, cartItem: CartItem) => {
    if (isInc) {
      if (cartItem.quantity === cartItem.quantityInCart) {
        alert("Can not increase more, no further stock is available");
      } else {
        const cartItemsArr: CartItem[] = JSON.parse(JSON.stringify(cartItems));
        const index = cartItemsArr.findIndex((item) => item.id === cartItem.id);
        cartItemsArr[index].quantityInCart++;
        setCartItems(cartItemsArr);
        const total = totalAmount + cartItem.price;
        setTotalAmount(total);
        localStorage.setItem("cartItems", JSON.stringify(cartItemsArr));
      }
    } else {
      if (cartItem.quantityInCart === 1) {
        deleteItem(cartItem.id);
      } else {
        const cartItemsArr: CartItem[] = JSON.parse(JSON.stringify(cartItems));
        const index = cartItemsArr.findIndex((item) => item.id === cartItem.id);
        cartItemsArr[index].quantityInCart--;
        setCartItems(cartItemsArr);
        const total = totalAmount - cartItem.price;
        setTotalAmount(total);
        localStorage.setItem("cartItems", JSON.stringify(cartItemsArr));
      }
    }
  };

  const deleteItem = (id: number) => {
    console.log(id);
    const newCartArr = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartArr);
    const total = newCartArr.reduce((sum, item) => sum + item.price, 0);
    setTotalAmount(total);
    localStorage.setItem("cartItems", JSON.stringify(newCartArr));
  };

  return (
    <div className="px-4 lg:px-12 py-4">
      {loading ? (
        <div className="text-2xl font-semibold">Loading...</div>
      ) : cartItems.length > 0 ? (
        <>
          <h2 className="text-3xl mb-3">Shopping Cart</h2>
          <div className="p-4 w-[600px] space-y-4">
            {cartItems.map((cartItem) => (
              <div
                key={cartItem.id}
                className=" rounded flex gap-6 bg-gray-50 p-2 shadow-md items-center "
              >
                <img src={cartItem.imageURL} className=" size-32" />
                <div className="flex-1">
                  <p className="font-semibold">{cartItem.name}</p>
                  <p className="text-gray-600">Rs.{cartItem.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => handleIncOrDec(false, cartItem)}
                    variant="outline"
                  >
                    -1
                  </Button>
                  <p>{cartItem.quantityInCart}</p>
                  <Button
                    onClick={() => handleIncOrDec(true, cartItem)}
                    variant="outline"
                  >
                    +1
                  </Button>
                </div>
                <Button
                  onClick={() => deleteItem(cartItem.id)}
                  variant="destructive"
                >
                  Delete
                </Button>
              </div>
            ))}
            <Separator />
            <h2 className="text-lg font-bold">
              Total amount:{" "}
              <span className="font-normal text-gray-700">
                Rs. {totalAmount}
              </span>
            </h2>
          </div>
        </>
      ) : (
        <p className="text-2xl font-semibold">
          Cart is Empty, Please add some items to continue
        </p>
      )}
    </div>
  );
};

export default CartPage;
