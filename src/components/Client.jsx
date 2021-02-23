import React from 'react'
import {Link} from 'react-router-dom';
import swal from 'sweetalert2';
import httpRequest from '../network/http';
import {swalFail, swalSuccess} from '../utils/swalResponse';

const Client = ({client, setClients}) => {

  const {_id, name, lastsName, company, email, phone, state } = client;

  const deleteClient = (clientId) => {
    swal.fire({
      text: 'Do you want to delete this client ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it ',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if(result.value){
        httpRequest.deleteById(`clients/${clientId}`, null)
          .then(response => {
            swalSuccess(response.message);
            httpRequest.getAll('clients', null)
              .then(data => {
                setClients(data.clients)
              })
              .catch(error => swalFail(error.message))
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
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </li>
      <hr/>
    </>
  )
}

export default Client;