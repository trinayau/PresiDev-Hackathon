import { useState, useEffect } from 'react';

const OrderPageElem = ({order}) => {
    const [orderStatus, setOrderStatus] = useState(order.status.name.toLowerCase())

    // add .green to step depending on order status:
    useEffect(() => {
        if (orderStatus === "placed") {
            document.getElementById("step-1").classList.add("green")
        } else if (orderStatus === "accepted") {
            document.getElementById("step-1").classList.add("green")
            document.getElementById("step-2").classList.add("green")
        } else if (orderStatus === "packed") {
            document.getElementById("step-1").classList.add("green")
            document.getElementById("step-2").classList.add("green")
            document.getElementById("step-3").classList.add("green")
        } else if (orderStatus === "shipped") {
            document.getElementById("step-1").classList.add("green")
            document.getElementById("step-2").classList.add("green")
            document.getElementById("step-3").classList.add("green")
            document.getElementById("step-4").classList.add("green")
        } else if (orderStatus === "delivered") {
            document.getElementById("step-1").classList.add("green")
            document.getElementById("step-2").classList.add("green")
            document.getElementById("step-3").classList.add("green")
            document.getElementById("step-4").classList.add("green")
            document.getElementById("step-5").classList.add("green")
        }
    }, [orderStatus])

    return ( 
    <div className="orderpage-elem container order">
        <div className="orderpage-elem__item d-flex row">
            <div className="orderpage-elem__item-info ">
                <div className="row">
                <p className="h4 col-6">Order #{order.id}</p>
                <div class="btn btn-primary text-uppercase col-6">order info</div>
                </div>
                <p>Products: {order.items.length}</p>
                <p>Order date: 12.1.2023</p>
            </div>
            <div className="orderpage-elem__item-status ">
                <p classname="h4">Status: {order.status.name}</p>
                <div className="progressbar-track">
                                    <ul className="progressbar">
                                        <li id="step-1" className="text-muted">
                                            <span className="fas fa-gift "></span>
                                        </li>
                                        <li id="step-2" className="text-muted">
                                            <span className="fas fa-check"></span>
                                        </li>
                                        <li id="step-3" className="text-muted">
                                            <span className="fas fa-box"></span>
                                        </li>
                                        <li id="step-4" className="text-muted">
                                            <span className="fas fa-truck"></span>
                                        </li>
                                        <li id="step-5" className="text-muted">
                                            <span className="fas fa-box-open"></span>
                                        </li>
                                    </ul>
                                    <div id="tracker"></div>
                </div>
            </div>
            
        </div>
        
        
    </div> );
}
 
export default OrderPageElem;
