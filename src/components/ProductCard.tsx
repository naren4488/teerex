import { Product } from "@/types";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

type Props = {
  productDetails: Product;
  handleAddToCart: (product: Product) => void;
};
const ProductCard = ({ productDetails, handleAddToCart }: Props) => {
  return (
    <div>
      <Card className="overflow-hidden">
        <CardContent className=" flex flex-col gap-3 px-0 pb-2">
          <h3 className=" border-b  text-black font-semibold  py-1 text-center">
            {productDetails.name}
          </h3>
          <div className="h-full w-full ">
            <img
              src={productDetails.imageURL}
              alt="tshirt img"
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center justify-between max-sm:flex-col sm:px-2">
            <p>Rs. {productDetails.price}</p>
            <Button onClick={() => handleAddToCart(productDetails)}>
              Add to cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
