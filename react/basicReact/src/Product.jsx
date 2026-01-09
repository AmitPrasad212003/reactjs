import "./Product.css"
import Price from "./Price.jsx";

function Product({title, idx}){
    let oldPrice = ["12,495", "11,900", "1,599", "599"];
    let newPrice = ["10,495", "9,900", "999", "399"];
    const descriptions = [
  ["High performance", "Reliable build quality"],
  ["Lightweight design", "Long battery life"],
  ["Affordable", "Durable for everyday use"],
  ["Premium quality", "Advanced features"]
];

     return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{descriptions[idx][0]}</p>
            <p>{descriptions[idx][1]}</p>
            <Price oldPrice= {oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}

export default Product;