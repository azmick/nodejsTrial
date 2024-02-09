//url modülünü etkinleştirmek için sabite ekleme yapıyoruz.

const url = require('url');

const address = 'http://sadikturan.com/kurslar?year=2019&month=nisan';

/*
url.parse metodu kullandığımızda eğer sadece parametre olarak
address girilirse query string olarak dönecekken yanında true
propu eklersek query bir obje döndürecek.
*/
let parsedUrl = url.parse(address, true);

console.log(parsedUrl);

//query obejsinin içindeki propsları kullanabiliyoruz.
console.log(parsedUrl.query.year);
console.log(parsedUrl.query.month);
