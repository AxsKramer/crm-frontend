import React from "react";

const OrderDetails = ({order, client=''}) => (
  <div className="order-details">
    <p>
      <strong>ORDER ID:</strong> {order._id}
    </p>
    <p>
      <strong>Created at:</strong> {new Date(order.created_at).toLocaleString()}
    </p>
    <p>
      <strong>Created by:</strong> {order.user.name} | {order.user.email}
    </p>
    <p>
      <strong>Client:</strong> {client.name} {client.lastName}
    </p>
    <p>
      <strong>Email:</strong> {client.email}
    </p>
    <p>
      <strong>Company:</strong> {client.company}
    </p>
  </div>
);

export default OrderDetails;
