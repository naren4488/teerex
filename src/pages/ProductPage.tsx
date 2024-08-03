/* eslint-disable react-hooks/exhaustive-deps */
import FilterCard from "@/components/FilterCard";
import ProductCard from "@/components/ProductCard";
import SearchProduct from "@/components/SearchProduct";
import { CartItem, Filters, Product } from "@/types";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [finalProductList, setFinalProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchString, setSearchString] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({
    colors: [],
    gender: [],
    price: [],
    type: [],
  });

  const handleSearch = (searchQuery: string) => {
    const searchResults = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFinalProductList(searchResults);
  };

  const handleFilterApply = (filters: Filters) => {
    // console.log(products[0]);
    // console.log(filters);
    // const res = products.filter()
  };

  const getProducts = async () => {
    await fetch(
      `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data);
        setFinalProductList(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // make api call to get products
    getProducts();
  }, []);

  useEffect(() => {
    handleSearch(searchString);
  }, [searchString]);

  useEffect(() => {
    handleFilterApply(filters);
  }, [filters]);

  const handleAddToCart = (productDetails: Product) => {
    // mocking api call using localStorage
    const cartItemsData = localStorage.getItem("cartItems");
    let cartItems: CartItem[] = [];
    if (cartItemsData) {
      cartItems = JSON.parse(cartItemsData);
    }
    const isProductAlreadyInCart = cartItems.find(
      (cartItem) => cartItem.id === productDetails.id
    );
    if (isProductAlreadyInCart) {
      // product is alredy in the cart, just show alert or toast
      alert("Product already in the cart");
      return;
    }

    const newItem: CartItem = {
      id: productDetails.id,
      imageURL: productDetails.imageURL,
      name: productDetails.name,
      price: productDetails.price,
      quantity: productDetails.quantity,
      quantityInCart: 1,
    };

    cartItems = [...cartItems, newItem];
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <div className="px-4 lg:px-12 py-4">
      {isLoading ? (
        <div className="text-2xl font-semibold">Loading...</div>
      ) : (
        <div className="flex flex-col gap-4 items-center">
          <SearchProduct updateSearchString={setSearchString} />
          <div className="flex gap-4 w-full">
            <div className="hidden lg:block">
              <FilterCard filters={filters} setFilters={setFilters} />
            </div>
            <div className="flex-1">
              {finalProductList.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-4 gap-2 flex-1">
                  {finalProductList.map((product) => (
                    <ProductCard
                      key={product.id}
                      productDetails={product}
                      handleAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              ) : (
                <p className="w-full">No products matching with the search</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
