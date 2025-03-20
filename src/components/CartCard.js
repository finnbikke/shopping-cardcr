import "./CartCard.css"
import { useCart } from "../context/CartContext"

export const CartCard = ({product}) => {
  const {removeFromCart} = useCart()

  const {name, price, image} = product

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="name">{name} </p>
      <div className="action">
        <p>Price: {price} euros</p>
      <button onClick={() => removeFromCart(product)} className="button">Remove From Cart</button>
     </div>
      
    </div>
  )
}

