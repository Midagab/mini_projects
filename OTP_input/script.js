const inputs = document.getElementById('inputs');

inputs.addEventListener('input', function(e){
    const target = e.target;
    const val = target.value;

    if(isNaN(val)){
        target.value = "";
        return;
    }
    
    if(val!=""){
        const next = target.nextElementSibling;
        if(next){
            next.focus();
        }
    }
});

inputs.addEventListener('keyup', function(e){
    const target = e.target;
    const key = e.key;

    if(key==="Backspace" || key==="Delete"){
        const prev = target.previousElementSibling;
        target.value = "";
        if(prev){
            prev.focus();
            prev.value = '';
        }
    }
});
