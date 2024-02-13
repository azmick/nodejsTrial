/*
ancak eventleri app.js'te gösterildiği gibi düz basit
bir şekilde kullanmak yetmez. Şimdi buna örnek olarak
kayıt işlemlerini tutan bir logger yapalım.
*/

/*
app.js'ten emitterları alalım.
*/

const EventEmitter = require('events');
const emitter = new EventEmitter();

function log(message){
    console.log(message);
    emitter.emit('connection', {id:5, message:'deneme'});
}
/*
Bu logger.js'i dışarıda kullanabilmek için bir export yapmamız
gerekiyor.
 */
module.exports = log;