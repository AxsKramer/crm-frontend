import React from 'react'
import {Link} from 'react-router-dom';
import swal from 'sweetalert2';
import httpRequest from '../network/http';

const Client = ({client, setClients}) => {

  const {_id, name, lastsName, company, email, phone, state } = client;

  const deleteClient = (clientId) => {
    swal.fire({
      title: 'Are you sure?',
      text: 'This client is going to be disabled',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, disable it ',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if(result.value){
        httpRequest.deleteById(`clients/${clientId}`, null).then(()=> {
          httpRequest.getAll('clients', null)
            .then(data => setClients(data.clients));
        })
      }
    })
  }

  return (
    <>
      <li className="li-container">
        <div className="client-details">
          <span className={state ? 'bg-green enable' : 'bg-yellow enable'}>
            {state ? 'Enabled' : 'Disabled'}
          </span>
          <p >
            <strong>Client:</strong>  {name} {lastsName}
          </p>
          <p ><strong>Company:</strong> {company}</p>
          <p><strong>Email:</strong>   {email}</p>
          <p><strong>Cel: </strong>  {phone}</p>
        </div>
        <div className="accions">
          <Link to={`/clients/client/edit/${_id}`} className="btn bg-blue">
            Edit
            <i className="fas fa-pen-alt" />
          </Link>

          <Link to={`/orders/new/${_id}`} className="btn bg-yellow">
            New order
            <i className="fas fa-plus" />
          </Link>
            <button 
                type="button" 
                className="btn bg-red" 
                onClick={() => deleteClient(_id)}
            >
            Delete
            <i className="fas fa-times" />
          </button>
        </div>
      </li>
      <hr/>
    </>
  )
}

export default Client;