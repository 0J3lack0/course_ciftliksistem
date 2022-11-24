var score = 40

//sınav notu : 50'ye eşit veya büyükse geçti, 40 ile 50 arasında bütünleme sınavı,küçükse kaldı

if (score>=50) {
  console.log('Pass')
}else if(score>=40){
  console.log('make-up examination')
}
else{
  console.log('Do not Pass')
}