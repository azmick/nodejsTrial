/*
Bu modül ile beraber projemizdeki dosya isimlerini
değiştirebiliriz, yeni dosya oluşturabiliriz, dosya silebiliriz. 
*/

//Modülümüzü sabitle tanımlıyoruz.
const fs = require("fs");

/*
Klasör içeriğini okuyalım.
*/

/*
Eğer biz burada fs.readdirSync gibi senkron bir fonksiyon
kullanırsak o noktada dizin okunana kadar uygulama durup bekler.
*/
const dizin = fs.readdir('./', function (error, data) {
    /*
    İlk parametre okurken hata alırsa diye, ikinci parametre
    dosyayı okursa okunan veriyi alıcak.
    */
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

const dosyaOku = fs.readFile('app.js', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//Dosya oluşturalım

fs.writeFile('deneme.txt', 'Merhaba dünya', (err) => {
    if (err) throw err;
    console.log('dosya oluşturuldu.');
})
/*
Burada writeFile fonksiyonunda text dosyasında
bir değişiklik yaptığında 0 dan dosyaya yazarken appendFile
fonksiyonunda önceki yazılmış text dosyasının üzerine yazmaya
devam eder.
*/
fs.appendFile('deneme1.txt', 'deneme', (err) => {
    if (err) throw err;
    console.log('dosya eklendi.');
});

fs.unlink('deneme1.txt', (err) => {
    if (err) throw err;
    console.log('deneme1.txt was deleted');
});