processor = function(){};
processor.prototype.processIterate = function(list, func, speed, chunk, count){
  if(speed == undefined){
    speed = 10;
  }
  if(chunk == undefined){
    chunk = 1;
  }
  if(count == undefined){
    count = -1;
  }
  var scope = this;
  setTimeout(function(){
    for(var i =0; i<chunk; i++){
      if(list[count+i] == undefined){
        continue;
      }
      func(list, count+i);
    }
    if(count < list.length-1){
      count = count+chunk;
      scope.processIterate(list, func, speed, chunk, count);
    }
  }, speed);
}
