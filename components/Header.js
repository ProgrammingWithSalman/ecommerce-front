import Link from "next/link";
import Center from "./Center";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const StyledHeader = styled.header`
background-color: #222;
`;




export default function Header() {
    const {cartProducts} = useContext(CartContext)
    return (
        <StyledHeader>
            <Center>
                <header className="flex justify-between items-center py-3">
                    <div>
                        <Link href={"/"} className="text-xl text-[#fff]">Ecommerce</Link>
                    </div>
                    <nav className="flex gap-2 text-gray-300 ">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/products'}>All products</Link>
                        <Link href={'/categories'}>Categories</Link>
                        <Link href={'/account'}>Account</Link>
                        <Link href={'/cart'}>Cart ({cartProducts.length})</Link>
                    </nav>
                </header>
            </Center>
        </StyledHeader>


    )
}