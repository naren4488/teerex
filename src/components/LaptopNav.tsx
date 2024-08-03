import { Link } from "react-router-dom";
import TeerexLogo from "/teerexLogo.svg";
import { ShoppingCart } from "lucide-react";

const LaptopNav = () => {
  return (
    <div className="flex h-14 items-center justify-between px-4 lg:px-12 py-2 shadow-lg">
      <div className="h-full">
        <Link to={"/"}>
          <img src={TeerexLogo} alt="" className="h-full object-cover" />
        </Link>
      </div>
      <div className="flex gap-8">
        <Link className="" to="/product">
          Product
        </Link>
        <Link to="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default LaptopNav;
