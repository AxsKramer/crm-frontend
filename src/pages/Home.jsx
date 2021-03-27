import React, {useEffect, useContext, useState} from 'react';
import {CRMContext} from '../context/authContext';
import {useHistory} from 'react-router-dom';
import httpRequest from '../network/http';
import { swalFail } from '../utils/swalResponse';
import UserDetails from '../components/UserDetails/UserDetails';
import Spinner from '../components/Spinner/Spinner';

const Home = () => {

  const history = useHistory();
  const [auth, setAuth] = useContext(CRMContext);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    if(auth.token !== "" && auth.auth){
      httpRequest.getAll('users', auth)
      .then(data => setUsers(data.users) )
      .catch(error => swalFail(error.response.data.message))
    }else{
      history.push('/');
    }
  },[]);

  return (  
    <div className='container text-center'>
      <div className='news'>
        <h2>News</h2>
        <p style={{fontSize: '1.5rem'}}>No news yet...</p>
      </div>
      <hr/>
      <br/>
      <h2>Coworkers</h2>
      <div className='users'>
        {
          users.length > 1 
            ? users.map((user) => (
              <div className='user-box' key={user._id}>
                <UserDetails user={user} width='100'/>
              </div>
            ))
            : <Spinner />
        }
        
      </div>
    </div>
  );
}
 
export default Home;