  var nightHandler = function(n){
    var target = document.querySelector('body');
    var aList = document.querySelectorAll('a')
    if(n.value ==='night'){
      target.style.backgroundColor ='black';
      target.style.color ='white';
      n.value ='day';
      for(i=0; i < aList.length; i++){
        aList[i].style.color = 'red';
      }
    } else{
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      n.value = 'night';
      for(i=0; i < aList.length; i++){
        aList[i].style.color = 'blue';
      }
    }
  }
