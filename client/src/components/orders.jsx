import React, { useState, useEffect } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { UserContext } from "../contexts/UserContext";
import { deleteOrder, getAllOrdersForUserId } from "../services/orderService";

export default function Orders() {
  const user = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    //TODO: replace with usercontext.id
    const orders = await getAllOrdersForUserId(3);

    setOrders(orders);
  }, []);

  const removeOrderFromList = (order, orderIndex) => {
    let tempOrders = [...orders];

    deleteOrder(order.id);
    tempOrders = tempOrders.filter((tempOrder) => tempOrder.id !== order.id);

    setOrders(tempOrders);
  };

  return (
    <div>
      {orders.map((order, index) => (
        <div className="border border-dark rounded p-2 my-2" key={index}>
          <h4>{order.restaurant.name}</h4>

          <p>
            <strong>Adresa dostave:</strong> {order.userLocation.name}
            <br />
            <strong>Vrijeme narudzbe: </strong> {order.createdAt}
            <br />
            <strong>Cijena:</strong> {order.price} kn
          </p>
          <p>
            <strong>Status:</strong> {order.status}
          </p>

          <ul style={{ listStyleType: "none" }}>
            {order.orderMeals.map((meal) => (
              <li>{meal.meal.name}</li>
            ))}
          </ul>
          <Button
            variant="danger"
            onClick={() => removeOrderFromList(order, index)}
          >
            {order.status === "Dostavljeno"
              ? "Izbrisi narudzbu"
              : "Otkazi narudzbu"}
          </Button>
        </div>
      ))}
    </div>
  );
}
