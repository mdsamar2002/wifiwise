let inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach((element, index) => {
    element.addEventListener('keyup', (e) => {
        let currentIndex = element;
        let nextIndex = element.nextElementSibling;
        let prevIndex = element.previousElementSibling;
         if(currentIndex.value.length>1){
            currentIndex.value="";
            return;
         }
         if(nextIndex && nextIndex.hasAttribute('disabled') && currentIndex.value !==""){
            nextIndex.removeAttribute('disabled',true);
            nextIndex.focus();
         }
    });
});
window.addEventListener('load',()=>{
    inputs[0].focus();
})