import { useState } from "react";
import data from "../data/data";
const testProduct = data[0];

export default function ProductCard({
  product = testProduct.product,
  priceOptions = testProduct.priceOptions,
  img = testProduct.img,
  quantity = testProduct.quantity,
}) {
  console.log(testProduct);
  const [productQuanity, setProductQuantity] = useState({
    //compound state to track the product quanity
    quantity,
    priceOptions: priceOptions[0],
  });

  return (
    <div className="ProductCard">
      {/*image */}
      <img src={img} alt="" height="100px" />
      {/*product name */}
      <h3>{product}</h3>
      {/*product quanitity */}
      <p>Quanity: {productQuanity.quantity}</p>
      {/*price drop down menu */}
      {/*on chnage is responsible to set the state to the option the user pciks from the menue*/}
      <select
        value={productQuanity.priceOptions}
        onChange={(e) => {
          setProductQuantity((prevData) => {
            return { ...prevData, priceOptions: parseFloat(e.target.value) };
          });
        }}
      >
        {priceOptions.map((price, index) => (
          <option key={index} value={price}>
            {price.toFixed(2)}
          </option>
        ))}
      </select>
      {/* display total price */}
      <p>
        Total Price: $
        {(productQuanity.quantity * productQuanity.priceOptions).toFixed(2)}
      </p>

      {/* button to add quanity */}

      <button
        onClick={() =>
          setProductQuantity((prevData) => {
            return { ...prevData, quantity: prevData.quantity + 1 }; // not ++ becasue then it will only add
            // when it referses, so it wont work for the first click
          })
        }
      >
        Add
      </button>

      {/* button to remove quanity */}

      <button
        onClick={() =>
          setProductQuantity((prevData) => {
            return {
              ...prevData,
              quantity: prevData.quantity > 0 ? prevData.quantity - 1 : 0, // terniry to check if quantity is
              // less then 0 so u dont have negative fruit
            };
          })
        }
      >
        Remove
      </button>
    </div>
  );
}