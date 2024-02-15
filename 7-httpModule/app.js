//modülü uygulamamıza getiriyoruz.
const http = require('http');

//http nin istek atıp yanıt alacağı sunucuyu oluşturmamız lazım (bu yorum satırı create server içine req res eklemeden önce yazılmıştır.)
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Ana dizindesin.');
        res.end();
    }
    if(req.url === '/api/products'){
        res.write('Products\'s list');
        res.end();
    }
}); 

/*Server objemiz bir emitter event'tır, dolayısıyla bir olay olduğunda
çalıştırabileceğimiz bir yapı oluşturabiliriz. */

/*Bizim burada yaptığımız şey siteye bağlandığımız zaman bize
yeni bağlantı adlı bir konsol yazısı veriyor. */
server.on('connection', function(){
    console.log('Yeni bağlantı.')
})

/*
Oluşturduğumuz sunucuyu dinlemek için port belirleyelim. 
*/

server.listen(3000);

console.log('3000\'deki port dinleniyor.')

/*
node.js uygulamaları bir event loop içinde çalışır, biz uygulamayı çalıştırdığımız zaman
server üzerinden bir event loop üzerinden eklenen listenerları dinleyip ona göre
cevap alıyor. Ctrl+C ile çalışmayı terminalden durdurabilirsiniz.
*/

