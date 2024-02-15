const http = require('http');
/*
Şu an ki amacımız oluşturduğumuz index.html dosyasını sunucuya göndermek.
O yüzden file modülünü kullanmamız gerekiyor.
*/
const fs = require('fs');

const server = http.createServer((req,res) => {

    // //Şu an sunucudan dönecek olan bilgileri ayarlayabildiğimizi görüyoruz.
    
    // res.setHeader('Content-Type', 'text/plain');
    // res.statusCode = 200;
    // res.statusMessage = 'OK';

    // res.write('Cevabi incele.');
    // res.end();

    /*
//     Peki sadece text mi cevap verebiliriz ?  Tabii ki hayır cevabımızı JSON formatı
//     ile de verebiliriz  
//     */
//    res.setHeader('Content-Type', 'application/json');
//    //alttaki yapıyla HTML kodu bile gönderebiliriz.
//    //res.setHeader('Content-Type', 'text/html');
//    res.statusCode = 200;
//    res.statusMessage = 'OK';
//    res.write(JSON.stringify({name: 'Melisa' ,age:23}));
//    res.end();


/*
tanımladığımız fs modülünü kullanalım.
*/
fs.readFile('index.html', 'utf8', function(err, data) {
    if (err) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
    res.end('<h1>Sayfa bulunamadi.</h1>');
    }else {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end(data);
    }
})

});

server.listen(3000);

console.log('3000 portu dinleniyor...')