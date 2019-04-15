var links = {
  setColor:function(color){
    // var aList = document.querySelectorAll('a')
    // for(i=0; i < aList.length; i++){
    //   aList[i].style.color = color;
    // }
    $("a").css("color", color);
  }
}
var body = {
  setColor:function(color){
    // document.querySelector('body').style.color = color;
    $("body").css("color", color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  }
}
nightHandler = function(self){
  if(self.value ==='night'){
    body.setBackgroundColor("black");
    body.setColor("white");
    self.value ='day';
    links.setColor('powderblue');
  } else{
    body.setBackgroundColor('white');
    body.setColor('black');
    self.value = 'night';
    links.setColor('red');
  }
}
