import React, {useContext} from 'react'
import swal from 'sweetalert2';
import httpRequest from '../../network/http';
import {swalFail, swalSuccess} from '../../utils/swalResponse';
import {CRMContext} from '../../context/authContext'
import ClientDetails from '../ClientDetails/ClientDetails';
import ClientButtons from '../ClientButtons/ClientButtons';
import './Client.css';

const Client = ({client, setClients}) => {
  const [auth, setAuth] = useContext(CRMContext);

  const {_id} = client;

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
        httpRequest.deleteById(`clients/${clientId}`, auth)
          .then(response => {
            swalSuccess(response.message);
            httpRequest.getAll('clients', auth)
              .then(data => setClients(data.clients))
              .catch(error => swalFail(error.message))
          })
          .catch(error => swalFail(error.message))
      }
    })
  };

  return (
    <>
      <li className="li-container">
        <ClientDetails client={client} />
        <ClientButtons id={_id}  deleteClient={deleteClient}/>
      </li>
      <hr/>
    </>
  )
}

export default Client;