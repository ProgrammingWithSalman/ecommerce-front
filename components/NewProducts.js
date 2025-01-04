/* eslint-disable react/jsx-key */

import Center from "./Center";
import ProductBox from "./ProductBox";

export default function NewProducts({products}) {
    return (
        <Center>
            <div className="mt-5 font-bold text-xl">New Arrival</div>
            <div className="grid grid-cols-4 text-center gap-3 mt-5">
                {products?.length> 0 && products.map(product => (
                    <ProductBox {...product} />
                ))}
            </div>
        </Center>
    )
}