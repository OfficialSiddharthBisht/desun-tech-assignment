import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOrder } from "../Redux/products/action";
import { Container, Row, Col } from 'react-bootstrap'
import "./checkOut.css"
export const CheckOutPage = () => {
    const orderList = useSelector((store) => store.ecommerceData.orders)
    const dispatch = useDispatch()
    let totalCost = 0
    for (var i = 0; i < orderList.length; i++) {
        totalCost += Number(orderList[i].price)

    }
    console.log(totalCost)
    useEffect(() => {
        dispatch(fetchOrder())
    }, [dispatch])
    console.log(orderList)
    return (
        <div className="checkContainer">
            <h1 style={{ fontSize: "33px", color: "brown" }}>Checkout</h1>
            <div>
                <span>Total Cost = <span style={{ fontSize: "large", color: "red" }}> ₹ {totalCost}</span> </span>
            </div>
            <div className="checkPageBody">
                {orderList && orderList.map((e, i) => {
                    return <div className="checkCard" key={i} >
                        <h2 style={{ fontWeight: "bolder" }}>{e.name}</h2>
                        <p>({e.year})</p>
                        <p style={{ color: "green", fontWeight: "bold" }}>₹ {e.price}</p>
                        <div className="checkimg">
                            <img src={e.photoLink} alt={"img"} />
                        </div>
                    </div>
                })}
            </div>
            <hr />
            <Container>
                <h2 style={{ textAlign: "center", fontSize: "41px" }}>Pay With</h2>
                <Row>
                    <Col>
                        <img src="https://i0.wp.com/financebuddha.com/blog/wp-content/uploads/2016/12/23155635/UPI1.jpg?fit=945%2C709&ssl=1" alt="" width="150px" />
                    </Col>
                    <Col>
                        <img src="https://clipartcraft.com/images/credit-card-logo-debit-1.png" alt="" width="190px" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}