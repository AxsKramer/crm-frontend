import React, {Fragment} from 'react'
import ClientDetails from '../ClientDetails/ClientDetails';
import ClientButtons from '../ClientButtons/ClientButtons';
import './Client.css';

const Client = ({client, clients, setClients}) => {
  return (
    <Fragment>
      <li className="li-container">
        <ClientDetails client={client} />
        <ClientButtons id={client._id} clients={clients} setClients={setClients}/>
      </li>
      <hr/>
    </Fragment>
  )
}

export default Client;