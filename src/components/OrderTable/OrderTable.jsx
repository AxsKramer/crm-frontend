import React from "react";

const OrderTable = ({order}) => (
  <table border="1" width="100%">
    <thead>
      <tr>
        <th colSpan="3">Products Order</th>
      </tr>
      <tr>
        <th>
          <i className="fas fa-box-open"></i> Product
        </th>
        <th>Price (USD)</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      {order.order.map((article) => (
        <tr key={order._id + article.product._id}>
          <td>{article.product.name}</td>
          <td>$ {article.product.price}</td>
          <td>{article.quantity}</td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="3">
          <strong>Total:</strong> ${order.total}
        </td>
      </tr>
    </tfoot>
  </table>
);

export default OrderTable;
