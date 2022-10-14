"use strict";

document.addEventListener("DOMContentLoaded", () => {

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

    
    function comprado(){

      let open = document.getElementById('btn-comprar');
      let close = document.getElementById('close-comprado');
      let modal = document.getElementById('modal-comprado');
      let mask = document.getElementById('mask-comprado');
      let modalForm = document.getElementById('modal');
      let maskForm = document.getElementById('mask');
    
      open.addEventListener('click', function () {

      event.preventDefault();
        modalForm.classList.add('hidden');
        maskForm.classList.add('hidden');
        modal.classList.remove('hidden-comprado');
        mask.classList.remove('hidden-comprado');
      });

      close.addEventListener('click', function () {
        modal.classList.add('hidden-comprado');
        mask.classList.add('hidden-comprado');
      });

      mask.addEventListener('click', function () {
        modal.classList.add('hidden-comprado');
        mask.classList.add('hidden-comprado');
      });

  }

  modal();
  comprado();
})