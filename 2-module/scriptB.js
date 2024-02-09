// // var firstName = 'Melisa';
// // console.log(firstName);
// // console.log(window);
// /*
// Eğer controller kullanmadan farklı dosyalardaki aynı değişkenleri
// window objesine vermeye çalışırsak index.html'deki en son yazılan
// dosyadaki değişkenin değerini tutar mesela şu an scripA'daki
// Azmi değerini tutuyor. Bu tür işlemlerde biz IIFE (Immediately
// Invoked Function Expression) fonskiyonlarını ifadesini kullanırız.
// https://g.co/gemini/share/0907d073a5e9
//  */


// //IIFE

// var controllerB = (function () {
//     //scopeB
//     var firstName = 'Melisa';
//     /*
//     Peki bu değerleri konsola nasıl yazdıracağız ?
//     scopetaki değerleri kullanabilmek için objeden dönecek
//     değeri veriyoruz (return).
//     */
//     return {
//         firstName
//     }
// })()

// /*
// Artık scopeB içinden verdiğimiz return değerlerini
// controllerB objesi aracılığıyla kullanabiliriz.
// */
// console.log("Selam benim adım "+controllerB.firstName);

/*
Bunları browser üzerinden yapmayı anlattık
şimdiyse bunu nodejs üzerindne module kullanarak nasıl 
yapabiliriz onu öğrenelim.
*/

/*
scriptA'daki değerleri scriptB'de module sayesinde
kullanalım.
*/

const scriptA = require('./scriptA');

scriptA.log(scriptA.name);
/*
Fark ettiyseniz scriptA alanındaki age üyesini alamadık
çünkü private değişken.
*/