var number1 = 6
var number2 = 16
var number3 = 3
var number4 = 48
var number5 = 49
var number6 = 11

console.log('Columns : ' + number1 + ' ' + number2 + ' ' 
                         + number3 + ' ' + number4 + ' ' 
                         + number5 + ' ' + number6 + ' ')

//generate rand. number
var numberRand = Math.random() * 49 // 49 max limit of generated rand. number ;)
console.log(numberRand)

// Round of generated rand. numb. with .ceil function.
//way 1
console.log('way 1: ' + Math.ceil(numberRand)) // round generated rand. number from above row!
//way 2
var numberRand = Math.ceil(Math.random() * 49 ) // round when generating rand. number
console.log('way 2: ' + numberRand)



// Loto Game

var number1 = Math.ceil(Math.random() * 49 )
var number2 = Math.ceil(Math.random() * 49 )
var number3 = Math.ceil(Math.random() * 49 )
var number4 = Math.ceil(Math.random() * 49 )
var number5 = Math.ceil(Math.random() * 49 )
var number6 = Math.ceil(Math.random() * 49 )
// yukarıdaki tanımlama kötü o yüzden fonksiyon tanımlayalım !

function genRandNumb(){
  return Math.ceil(Math.random() * 49 )
}

console.log(genRandNumb())

var number1 = genRandNumb()
var number2 = genRandNumb()
var number3 = genRandNumb()
var number4 = genRandNumb()
var number5 = genRandNumb()
var number6 = genRandNumb()

console.log('Loto Columns : ' + number1 + ' ' + number2 + ' ' 
                              + number3 + ' ' + number4 + ' ' 
                              + number5 + ' ' + number6 + ' ')


// Loto Game'de 1-49 arasında olan aralığındaki max değeri (49) istediğimiz zaman değiştirebilelim:

function genLotoNumb(maxValue = 49){
  return Math.ceil(Math.random()*maxValue)
}

// zengin olmak kolay değil 1-100 arası yapalım.Bir değer belirtilmezse genLotoNumb fonksiyonunun   aldığı maxValue değeri 49'dur!

var number1 = genLotoNumb(100)
var number2 = genLotoNumb(100)
var number3 = genLotoNumb(100)
var number4 = genLotoNumb(100)
var number5 = genLotoNumb(100)
var number6 = genLotoNumb(100)

console.log('Loto Columns (hard) : ' + number1 + ' ' + number2 + ' ' 
                                     + number3 + ' ' + number4 + ' ' 
                                     + number5 + ' ' + number6 + ' ')














                