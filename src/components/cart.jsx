import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, deletProductCart } from "../Redux/products/action";
import { useEffect } from "react";
import { fetchCart } from "../Redux/products/action";
import "./cart.css"
import { useNavigate } from "react-router-dom"
import { NavigationBar } from "./Header";

export const CartPage = () => {
    const navigate = useNavigate();
    const cart = useSelector((store) => store.ecommerceData.cart)
    const dispatch = useDispatch()
    const removeProduct = (id) => {
        dispatch(deletProductCart(id))
    }
    const checkoutHandler = (cart) => {
        dispatch(addOrder(cart))
    }
    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch])
    console.log(cart)
    return (
        <div className="cartContainer">
            <NavigationBar />
            <h1 style={{ fontSize: "43px", color: "darkgray" }}>Cart</h1>

            <div className="cartBody">
                {cart && cart.map((e, i) => {
                    return <div className="cartCard" key={i} >
                        <h2 style={{ fontSize: "large" }}>{e.name}</h2>
                        <p>({e.year})</p>
                        <h4 style={{ color: "green" }}>₹ {e.price}</h4>
                        <div className="cartimg">
                            <img src={e.photoLink} alt={"img"} />
                        </div>
                        <button className="removeButton" onClick={() => { removeProduct(e.id) }}>Remove </button>
                    </div>
                })}
            </div>
            <div><div className="checkOutButton" onClick={() => { return checkoutHandler(cart), navigate("/checkout") }}>Checkout</div></div>
        </div>
    )
}