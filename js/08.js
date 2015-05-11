function zero(){
  return [];
}

function succ(a){
  a.push(true);
  return a;
}

 function n(a){
    if(a == 0){
     return zero();
  }

  else if(a > 0){
    var counter = 1;
    var array = zero();
    while(counter <= a){
    array = succ(array);
            counter++;
  }
    return array;
  }

  else if(a < 0){
          return null;
        }
      }
