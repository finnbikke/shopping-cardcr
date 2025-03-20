import "./ProductCard.css"
import { useCart } from "../context/CartContext"
import { useEffect, useState } from "react"

export const ProductCard = ({product}) => {
  const { cartList, addToCart, removeFromCart} = useCart()
  const [isInCart, setIsInCart] = useState(false)

  const { id, name, price, image} = product

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === id)
    if(productIsInCart){
      setIsInCart(true)
    } else
      {setIsInCart(false)}
    
  }, [cartList, id])


  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name} </p>
      <div className="action">
        <p>Price: {price} euros</p>
        { isInCart ?   <button onClick={() => removeFromCart(product)} className="remove">Remove </button>: <button onClick={() => addToCart(product)}>Add To Cart </button> }
      </div>
      
    </div>
  )
}



