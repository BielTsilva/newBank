const insuranceBtn = document.getElementById('insuranceBtn');
const btnCloseModal = document.getElementById('closeModal')
const modal = document.getElementById('modal');

function switchModal(){
    modal.classList.remove('modalOff');
    modal.classList.add('modalOn');
}

function closeModal(){
    modal.classList.remove('modalOn');
    modal.classList.add('modalOff');
}

insuranceBtn.addEventListener('click', switchModal);
btnCloseModal.addEventListener('click', closeModal);
window.onclick = function(event){
    if(event.target == modal){
        closeModal()
    }
}

