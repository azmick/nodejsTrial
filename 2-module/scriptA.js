// var controllerA = (function () {
//     //scopeA
        //public member
//     var lastname = 'karakaya'

//     var firstName = 'Azmi';

//     return {
    //private member
//         firstName
//     }
// })()

// console.log("Selam benim adım "+controllerA.firstName);

//nodejs

/*
Bunu yazdırıp sonrasında node scriptA komutunu çalıştırınca,
göreceksiniz ki exports içinde hiçbir şey mevcut değil. Biz
tanımlamış olduğumuz özellikleri exports propunun içindeki
objeye aktarmamız gerekiyor. Bunun browser tarafındaki benzeri
IIFE fonksiyonunun içinde return'un içine almamızdır.
*/

//private member
var age = 30;

//public members
var firstName = 'Azmi';
var log = function(name){
    console.log(name);
}

/*
Şimdi bunları nodejsde exports içine atalım
*/

module.exports.name = firstName;
module.exports.log = log;

/*
Şimdi biz scriptA'da verdiğimiz bu üyeleri scriptB'de kullanalım
41.satır.
*/

