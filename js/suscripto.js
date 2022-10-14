"use strict";

document.addEventListener("DOMContentLoaded",()=>{

  function modal(){

    let open = document.getElementById('open');
    let close = document.getElementById('close');
    let modal = document.getElementById('modal');
    let mask = document.getElementById('mask');
  
    open.addEventListener('click', function () {
      modal.classList.remove('hidden');
      mask.classList.remove('hidden');
    });
    close.addEventListener('click', function () {
      modal.classList.add('hidden');
      mask.classList.add('hidden');
    });
    mask.addEventListener('click', function () {
      modal.classList.add('hidden');
      mask.classList.add('hidden');
    });
}

    function suscripto(){

        let open = document.getElementById('open-suscripto-ok');
        let close = document.getElementById('close-exito');
        let modal = document.getElementById('modal-exito');
        let mask = document.getElementById('mask-exito');
        let modalForm = document.getElementById('modal');
        let maskForm = document.getElementById('mask');
      
        open.addEventListener('click', function () {

        event.preventDefault();
          modalForm.classList.add('hidden');
          maskForm.classList.add('hidden');
          modal.classList.remove('hidden-exito');
          mask.classList.remove('hidden-exito');
        });

        close.addEventListener('click', function () {
          modal.classList.add('hidden-exito');
          mask.classList.add('hidden-exito');
        });

        mask.addEventListener('click', function () {
          modal.classList.add('hidden-exito');
          mask.classList.add('hidden-exito');
        });

    }

    modal();
    suscripto();


})