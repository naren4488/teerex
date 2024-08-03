import { Filters } from "@/types";
import filterData from "./../filterData.json";
type Props = {
  filters: Filters;
  setFilters: (filters: Filters) => void;
};
const FilterCard = ({ filters, setFilters }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: [
        ...filters[e.target.name as keyof Filters],
        e.target.value,
      ],
    });
  };

  // let obj = {
  //   name: "Narendra",
  //   place: {
  //     city: "blr",
  //     address: {
  //       houseNo: "913",
  //       floorNo: "3rd",
  //     },
  //   },
  //   hobbies: ["music", "coding"],
  // };

  // console.log("before", obj);

  // obj = { ...obj, hobbies: [...obj.hobbies, "cricket"] };
  // console.log("after", obj);

  return (
    <div className="flex flex-col gap-3 rounded-lg border shadow-lg p-4 w-60">
      <h2 className="text-2xl font-semibold">Filters</h2>
      <div>
        <h3 className="border-b">Colors</h3>
        <div className="flex flex-col">
          {filterData.colors.map((color, index) => (
            <label key={index} className="flex items-center gap-4">
              <input
                type="checkbox"
                value={color}
                name="colors"
                onChange={(e) => handleChange(e)}
              />
              {color}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="border-b">Gender</h3>
        <div className="flex flex-col">
          {filterData.gender.map((gender, index) => (
            <label key={index} className="flex items-center gap-4">
              <input
                type="checkbox"
                value={gender}
                name="gender"
                onChange={(e) => handleChange(e)}
              />
              {gender}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="border-b">Price</h3>
        <div className="flex flex-col">
          {filterData.price.map((price, index) => (
            <label key={index} className="flex items-center gap-4">
              <input
                type="checkbox"
                value={price[0]}
                name="price"
                onChange={(e) => handleChange(e)}
              />
              {price[1]}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="border-b">Type</h3>
        <div className="flex flex-col">
          {filterData.type.map((type, index) => (
            <label key={index} className="flex items-center gap-4">
              <input
                type="checkbox"
                value={type}
                name="price"
                onChange={(e) => handleChange(e)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
