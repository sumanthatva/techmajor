import ProductList from "../ProductList";

export default function Home(props) {
  return (
    <div style={{"text-align": "center"}}>
      <ProductList products={props.products}/>
    </div>
  )
}