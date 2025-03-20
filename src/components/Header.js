import "./Header.css"
import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/Logo.png"
import { useCart } from "../context/CartContext"

export const Header = () => {
  const { cartList } = useCart()
  return (
    <header>
    <Link to="/" className="logo">
    <img src={Logo} alt="Logo" />  
    <span>CR Context and Reducer Cart</span></Link>
    <nav className="navigation">
      <NavLink to="/" className="link" end>Home</NavLink>
      <NavLink to="/shoppingcart" className="link">Cart</NavLink>
    </nav>
    <Link to="/shoppingcart" className="items">
    <span>Cart: {cartList.length}</span></Link>
    </header>
  )
}
