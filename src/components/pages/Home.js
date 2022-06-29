import ProductList from "../ProductList";

export default function Home(props) {
  return (
    <div>
      <ProductList products={props.products}/>
    </div>
  )
}