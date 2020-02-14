import Swal from 'sweetalert2';
import axios from 'axios';

// seleccionando un elemento por su id
const btnEliminar = document.querySelector('#eliminar-proyecto');

btnEliminar.addEventListener('click', () => {
    Swal.fire({
        title: 'Deseas borrar este proyecto?',
        text: "No podrás revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Eliminado!',
            'El proyecto ha sido borrado.',
            'success'
          );

        //redireccionar al home
        setTimeout(() => {
            window.location.href = '/'
        }, 2000);
        }
      });
})