//Loto sayıları üreten fonksiyon (1-49 arasında) ile birden fazla kolon için 6'lı loto sayıları üretmek
//Bunun için iç içe döngüleri kullanabiliriz. 
function genLotoNumb(maxValue = 49){
  return Math.ceil(Math.random()*maxValue)
}

for(var i = 1; i <=8; i++){
  console.log(i + '.Columns');
  for(var j = 1; j<=6; j++){
    console.log(genLotoNumb());
  }
}


