import PrimaryBtn from "./Button";
import ButtonLink from "./ButtonLink";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

/* eslint-disable @next/next/no-img-element */
export default function ProductBox({ _id, title, description, price, images }) {
  const {addProduct} = useContext(CartContext)
  const url = '/product/'+_id;
  return (
    <div className="">
      <div className="bg-[#fff] flex p-4 h-[150px]   items-center rounded-lg justify-center ">
        <img src={images[0]} alt="" className="max-w-[100%] max-h-[100%] " />
      </div>
      <div className="mt-2">
        <Link href={url} className="font-normal text-[1rem]">{title}</Link>
        <div className="flex items-center justify-between mt-1">
          <div className="md:text-[1.5rem] text-[1.3rem] font-bold">${price}</div>
          
            <Button onClick={() => addProduct(_id)} buttonVariant="outline"  styles="md:px-1 md:py-2 text-sm py-1 px-[3px] md:text-xl font-bold">
              Add to cart
            </Button>
          
        </div>
      </div>
    </div>
  );
}
