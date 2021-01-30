import React, { useState, useEffect } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { UserContext } from "../contexts/UserContext";
import {
  deleteOrder,
  getAllOrdersForUserId,
  getAllOrdersForRestaurantId,
} from "../services/orderService";

export default function Orders() {
  const user = useContext(UserContext)[0];
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    let tempOrders = [];
    if (user.type === "user") tempOrders = await getAllOrdersForUserId(user.id);
    else tempOrders = await getAllOrdersForRestaurantId(user.id);

    setOrders(tempOrders);
  }, []);

  const removeOrderFromList = (order, orderIndex) => {
    let tempOrders = [...orders];

    deleteOrder(order.id);
    tempOrders = tempOrders.filter((tempOrder) => tempOrder.id !== order.id);

    setOrders(tempOrders);
  };

  const formatDate = (date) => {
    const d = new Date(date);

    return `${d.getHours()}:${d.getMinutes()} ${d.getDate()}.${
      d.getUTCMonth() + 1
    }.${d.getFullYear()}.`;
  };

  return (
    <div>
      {orders.map((order, index) => (
        <div className="border border-dark rounded p-2 my-2" key={index}>
          {user.type === "user" ? (
            <h4>{order.restaurant.name}</h4>
          ) : (
            <h4>{order.user.firstName + " " + order.user.lastName}</h4>
          )}

          <p>
            <strong>Adresa dostave:</strong> {order.userLocation.name}
            <br />
            <strong>Vrijeme narudzbe: </strong> {formatDate(order.createdAt)}
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
