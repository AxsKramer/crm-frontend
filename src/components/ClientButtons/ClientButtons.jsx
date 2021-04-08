import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {CRMContext} from '../../context/authContext';
import {deleteClient} from '../../utils/deleteItems';

const ClientButtons = ({id, clients, setClients}) => {
  const [auth, setAuth] = useContext(CRMContext);
  return (
    <div className="actions">
      <Link
        to={`/clients/client/edit/${id}`}
        className="btn bg-blue btn-text-space"
      >
        <span className="span-text">Edit</span>
        <i className="fas fa-pen-alt" />
      </Link>

      <Link
        to={`/clients/client/new/order/${id}`}
        className="btn bg-yellow btn-text-space"
      >
        <span className="span-text">New order</span>
        <i className="fas fa-plus" />
      </Link>
      
      <button
        type="button"
        className="btn bg-red btn-text-space"
        onClick={() => deleteClient(id, auth, clients, setClients)}
      >
        <span className="span-text">Delete</span>
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default ClientButtons;
