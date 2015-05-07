function zero(){
  return [];
}

function succ(a){
  a.push(true);
  return a;
}

function ten(){
  var a = zero();
  var i = 0;
  while(i < 10){
    a = succ(a);
    i = i + 1;
  }


  return a;
}
