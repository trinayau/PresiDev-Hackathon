import { useState, useEffect } from 'react';

const OrderPageElem = ({ order }) => {
    // const [orderStatus, setOrderStatus] = useState()

  
    useEffect(() => {
        const orderStatus = order.status.name.toLowerCase();
        // wait for page to load:
        
        // find the container with the id of order.id and add green to the step with the id of step-1:
        
        const orderContainer = document.getElementById(order.id)
        
        if (orderStatus === "placed") {
            orderContainer.querySelector(`#step-1`).classList.add("green")
        } else if (orderStatus === "accepted") {
            orderContainer.querySelector(`#step-1`).classList.add("green")
            orderContainer.querySelector(`#step-2`).classList.add("green")
        } else if (orderStatus === "packed") {
            orderContainer.querySelector(`#step-1`).classList.add("green")
            orderContainer.querySelector(`#step-2`).classList.add("green")
            orderContainer.querySelector(`#step-3`).classList.add("green")
        } else if (orderStatus === "shipped") {
            document.getElementById("step-1").classList.add("green")
            document.getElementById("step-2").classList.add("green")
            document.getElementById("step-3").classList.add("green")
            document.getElementById("step-4").classList.add("green")
        } else if (orderStatus === "delivered") {
            orderContainer.querySelector(`#step-1`).classList.add("green")
            orderContainer.querySelector(`#step-2`).classList.add("green")
            orderContainer.querySelector(`#step-3`).classList.add("green")
            orderContainer.querySelector(`#step-4`).classList.add("green")
            orderContainer.querySelector(`#step-5`).classList.add("green")
        }
    }, [order])

    const parseDate = (date) => {
        const orderDate = new Date(date)
        const year = orderDate.getFullYear()
        const month = orderDate.getMonth()+1
        const day = orderDate.getDate()
        return `${day}/${month}/${year}`
    }

    return (
        <div className="orderpage-elem container order my-4" id={order.id}>
            <div className="orderpage-elem__item d-flex row">
                <div className="orderpage-elem__item-info ">
                    <div className="row">
                        <p className="h4 col-6">Order #{order.id}</p>
                        <btn class="btn btn-primary text-uppercase col-6" onClick={() => console.log('open order')} >order info</btn>
                    </div>
                    <p>Products: {order.items.length}</p>
                    <p>Order date: {parseDate(order.created_at)}</p>
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


        </div>);
}

export default OrderPageElem;
