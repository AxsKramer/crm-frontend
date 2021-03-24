import React from "react";

const ClientDetails = ({children, client}) => (
  <div className="client-details">
    <p>
      <strong>Client:</strong> {client.name} {client.lastsName}
    </p>
    <p>
      <strong>Company:</strong> {client.company}
    </p>
    <p>
      <strong>Email:</strong> {client.email}
    </p>
    <p>
      <strong>Phone: </strong> {client.phone}
    </p>
    {children}
  </div>
);

export default ClientDetails;
