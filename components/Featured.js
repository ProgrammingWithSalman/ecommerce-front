/* eslint-disable @next/next/no-img-element */
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Featured({product}) {
    const {addProduct} = useContext(CartContext)
    function addFeaturedToCart() {
        addProduct(product._id);
    }


    return (
        <div className="bg-[#222] text-white px-10 py-10">
            <Center>
                <div className=" sm:grid sm:grid-cols-2 md:flex items-center">
                    <div className="md:w-[40%] md:mx-auto">
                        <div className="flex-col justify-center">

                            <h1 className="text-4xl">{product.title}</h1>
                            <p className="text-[#aaa] text-[.8rem] py-4">{product.description}</p>
                            <div className="flex">

                                <ButtonLink 
                                link={"/products/"+product._id}
                                styles={"bg-none text-white border-[1px] border-white rounded-md md:px-5 mr-3 mt-5 px-2 py-1 "}
                                >
                                    Read more
                                </ButtonLink>
                                <Button onClick={addFeaturedToCart} styles={"bg-[#fff] text-black inline-flex border-[1px] md:px-5 mt-5 px-2 py-2"} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 self-center">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>


                                    Add to cart</Button>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[60%] md:mx-auto">
                        <img className="md:w-[80%] w-[110%] md:mx-auto" src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png" alt="" />
                    </div>
                </div>
            </Center>
        </div>
    )
}