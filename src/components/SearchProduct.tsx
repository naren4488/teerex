import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  updateSearchString: (value: string) => void;
};
const SearchProduct = ({ updateSearchString }: Props) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    updateSearchString(input);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="w-80 lg:w-1/2 flex items-center gap-2">
      <Input
        type="text"
        placeholder="Search products..."
        value={input}
        onChange={(e) => handleChange(e)}
        className=" "
      />
      <Button onClick={() => handleSearch()}>
        <Search />
      </Button>
    </div>
  );
};

export default SearchProduct;
