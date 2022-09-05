const DAYSE = document.getElementById('checkDayse');
const ICON = document.getElementById('theySee');
const HIDEVALUE = document.getElementById('hideValue')

DAYSE.addEventListener('click', changeIcon);

function changeIcon(){
    if(DAYSE.checked == true){
        ICON.src = "./svg/navIcons/iconEye.svg";
        HIDEVALUE.innerText = "R$ 10.000"
    } else { 
        ICON.src = "./svg/navIcons/iconSlashedEye.svg";
        HIDEVALUE.innerText = " ******* "
    }
}



