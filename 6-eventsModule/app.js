//Event modulünü sayfa içerisine getirelim
const EventEmitter = require('events')

/*
yukarıda events'i tanımlayarak aslında biz bir  class ürettik,
bu class'ı kullanabilmek için bir ondan bir obje oluşturalım.
*/
const emitter = new EventEmitter

/*
Oluşturduğumuz logger.js dosyasındaki event'i tetikleme
örneğini burada kullanmak için sabit olarak tanımlayalım.
*/

const logger = require('./logger')

//listener oluşturalım.
emitter.on('connection', function (
    /*
    Buraya istersek tek tek parametre girip emit kısmından değerleri
    alabiliriz, ama tek tek parametre girmek yerine args yazıp
    tüm değerleri bir obje olarak alabiliriz.
    */
    args
) {
    console.log('Bağlanıldı', args.message);
})

//Şimdiyse oluşturduğumuz listener'ı tetikleyelim.
//emit fonksiyonu tanımladığımız listener'i tetiklememize olanak
/* 
Benzerini örnek vermek için logger.js'te gösterdik
emitter.emit('connection',{id:5,message:'Deneme'});
*/

/*
logger'ın kendisi bir fonksiyon olduğu için direkt en altındaki
log'a erişip içindeki fonksiyona direk ulaşıp istediğimiz mesajı
yazdırabiliriz.
*/
logger('sadikturan login oldu.')




