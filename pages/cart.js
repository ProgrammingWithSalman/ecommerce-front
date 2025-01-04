/* eslint-disable react/jsx-key */
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        console.log(response);
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
    console.log("hello");
  }

  let total = 0;

  for (const productId of cartProducts) {
    const product = products.find((p) => p._id === productId);
    const price = Number(product?.price) || 0; // Convert price to a number
    total += price;
  }

  console.log("total:", total);

  return (
    <>
      <Header />
      <div className="grid grid-cols-modified gap-5 mt-10 m-8 md:m-14">
        <div className="bg-white rounded-[10px] p-7">
          <h2>Cart</h2>
          {!cartProducts?.length && <div>Your cart is empty</div>}

          {products.length > 0 && (
            <table className="w-[100%] ">
              <thead>
                <tr className="text-left uppercase text-[.7rem] font-[600] text-[#ccc]">
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr className="border-t-[1px] ">
                    <td>
                      <div className="max-w-[100px] h-[100px] p-1 mt-3 rounded-[5px] border-[1px] flex justify-center items-center ">
                        <img
                          className="max-w-[70px] max-h-[70px] "
                          src={product.images[0]}
                        />
                      </div>
                      {product.title}
                    </td>
                    <td>
                      <Button onClick={() => lessOfThisProduct(product._id)}>
                        -
                      </Button>
                      <span className="py-1 m-1">
                        {cartProducts.filter((id) => id === product._id).length}
                      </span>
                      <Button onClick={() => moreOfThisProduct(product._id)}>
                        +
                      </Button>
                    </td>
                    <td>
                      $
                      {cartProducts.filter((id) => id === product._id).length *
                        product.price}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td>${total}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        {cartProducts?.length > 0 && (
          <div className="bg-white rounded-[10px]  p-7 ">
            <h2 className="font-bold text-md">Order information</h2>
            <form method="post" action="/api/checkout">
              <input
                className="border-[1px] border-[#aaa] mt-1 py-1 px-2 rounded-[5px] w-[100%] text-sm "
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="border-[1px] border-[#aaa] mt-1 py-1 px-2 rounded-[5px] w-[100%] text-sm"
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="flex gap-[2px]">
                <input
                  className="border-[1px] border-[#aaa] mt-1 py-1 px-2 rounded-[5px] w-[100%] text-sm"
                  type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  className="border-[1px] border-[#aaa] mt-1 py-1 px-2 rounded-[5px] w-[100%] text-sm"
                  type="text"
                  placeholder="Pin Code"
                  value={pincode}
                  name="pincode"
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
              <input
                className="border-[1px] border-[#aaa] mt-1 py-1 px-2 rounded-[5px] w-[100%] text-sm"
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                name="streetAddress"
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              <input
                className="border-[1px] border-[#aaa] mt-1 py-1 px-2 rounded-[5px] w-[100%] text-sm"
                type="text"
                placeholder="Country"
                value={country}
                name="country"
                onChange={(e) => setCountry(e.target.value)}
              />
              <input
                type="hidden"
                name="products"
                value={cartProducts.join(",")}    
              />
              <Button
                type="submit"
                buttonVariant={"black"}
                styles={"py-2 px-3 mt-5"}
              >
                Continue to payment
              </Button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
