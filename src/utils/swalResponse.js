import Swal from 'sweetalert2';

export const swalSuccess = (message) => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    text: message,
    showConfirmButton: false,
    timer: 2000
  })
}
export const swalFail = (message) => {
  Swal.fire({
    icon: 'error',
    text: message
  })
}