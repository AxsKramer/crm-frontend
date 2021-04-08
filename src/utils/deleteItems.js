import swal from 'sweetalert2';
import httpRequest from '../network/http';
import {swalFail, swalSuccess} from './swalResponse';

export const deleteClient = (clientId, auth, clients, setClients, ) => {
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
          const newClients = clients.filter(aclient => aclient._id !== clientId);
          setClients(newClients);
          swalSuccess(response.message)
        })
        .catch(error => swalFail(error.response.message))
    }
  })
};

export const deleteOrder = (id, auth, orders, setOrders ) => {
  swal.fire({
    text: "Do you want to delete this order ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Delete it",
    cancelButtonText: "No, Cancel",
  }).then((result) => {
    if (result.value) {
      httpRequest.deleteById(`orders/${id}`, auth)
        .then(response => {
          swalSuccess(response.message);
          const newOrders = orders.filter(ord => ord._id !== id );
          setOrders(newOrders);
        }).catch(error => swalFail(error.message))
    }
  });
}

export const deleteProduct = (id, auth, setProducts) => {
  swal.fire({
    text: "Do you want to delete this product ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Delete it",
    cancelButtonText: "No, Cancel",
  }).then((result) => {
    if (result.value) {
      httpRequest.deleteById(`products/${id}`, auth)
      .then(response => {
        swalSuccess(response.message);
        httpRequest.getAll('products', auth)
          .then(response => setProducts(response.products))
      })
      .catch(error => swalFail(error.message));
    }
  });
};

export const deleteUser = (id, auth, setLoading, setUser, setAuth ) => {
  setLoading(true);
  swal.fire({
    text: "Do you want to delete this client ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it ",
    cancelButtonText: "Cancel",
  })
    .then((result) => {
      if (result.value) {
        http.deleteById(`users/delete-user/${id}`, auth)
          .then(() => {
            setLoading(false);
            localStorage.removeItem("token");
            setAuth({ token: "", auth: false });
            setUser("");
          })
          .catch((error) => swalFail(error.response.message));
      }
    });
};