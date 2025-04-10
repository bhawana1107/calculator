function numberClick(el){
    let num = el.innerText;
    document.getElementById("result").value += num;
}
function handleClick(el) {
   let action = el.innerText;
   let display = document.getElementById("result");
   if (action === '='){
    display.value = eval(display.value);    
   } else if (action === 'C'){
    display.value = "";
  }
}
