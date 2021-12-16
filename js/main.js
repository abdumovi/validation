let form = document.querySelector('.form'),
    inputs = document.querySelectorAll('.inputs'),
    btn = document.querySelector('.btn');
for(let item of inputs){
  item.addEventListener('blur',function(){
    if(item.value != ''){
      item.style.borderColor = '#e5e5e5'; 
    }
    else{
      item.style.borderColor = 'red';
    }
  });
}  

btn.addEventListener('click',function(){
  inputs.forEach(function(i){
    if(i.value == ''){
      i.style.borderColor = 'red';
      forma(false);
    }
    else{
      forma(true);
    }
  });
  if(inputs[3].value != inputs[4].value){
    forma(false);
    inputs[4].style.borderColor = 'red';
  } 
  else{
    forma(true);
  }
});
function forma(item){
  if(item){
    form.addEventListener('submit',function(e){});
  }
  else{
    form.addEventListener('submit',function(e){
      e.preventDefault();
    });
  }
}