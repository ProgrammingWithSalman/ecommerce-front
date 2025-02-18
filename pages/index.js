import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product.models";


export default function HomePage({featuredProduct, newProducts}) { 
  console.log(newProducts)
  return (
    <>
      <Header />
      <Featured product={featuredProduct}/>
      <NewProducts products={newProducts}/>
    </>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '66cc56a89c03174c7f891f28'
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id': -1}})
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    },
  }
}