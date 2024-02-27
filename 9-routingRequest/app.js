/*
Burada gelen istekleri nasıl yöneteceğiz
bunu kullanıcının bize yollayacağı
form bilgilerini kullanarak öğreneceğiz.
*/
const http = require('http');
const fs = require('fs');
/*
eğer message'ı obje olarak kullanıp
parse etmek istersek bunu kullanabiliriz.
*/
const qs = require('querystring');

const server = http.createServer((req, res) => {
    /*
    Kullanıcıların uygulamaya göndermiş olduğu
    isteğin adresini alalım.
    */
    const url = req.url;
    /*isteğin methodunu yakalamak için bir method değişkeni*/
    const method = req.method;
    /*
    Gelen url anasayfa dizinime gelen bir istek mi ?
    */
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        /*log adlı adrese bir mesaj yolluyoruz. */
        res.write(`
        <html>
        <head>
        <title>Mesajinizi Girin</title>
        </head>
        <body>
        <form method="POST" action="/log">
        <input type="text" name="message">
        <button type="submit">Kaydet</button>
        </form>
        </body>
        </html>
        `);
        /*
        İki tane if bloğu kullandık eğer return
        ifadesini kullanmazsak. Bu if bittiğinde
        alttaki if'i kullanacak ben böyle bir şey
        istemiyorum. Biri varsa diğeri kullanılmayacak.
        bu sebepten return kullanıyoruz.
        */
        return res.end();
    }

    if (url === '/log' && method === 'POST') {

        //body parsing işlemi
        const body = []
        req.on('data', (chunk) => {
            /*
            Gelen bufferların hepsini body içine atıyoruz.
            */
            body.push(chunk)
            /*
            Şu an bize bilgiyi bir buffer içinde yolluyor.
            */
            console.log(chunk);
        })
        /*
        Mesaj gelme işlemi bittiği zaman body'nin içindeki
        buffer'ın anlamlı hale yani strigne dönüşmesi için 
        parse işlemi. 
        */
        req.on('end', () => {
            const bodyParsed = Buffer.concat(body).toString(); //output message=yazı
            const message = bodyParsed.split('=')[1]; //output yazı, mesajı = işaretinden ayırıyor ve sonrasını alıyor.
            
            console.log(qs.parse(bodyParsed).body());

            fs.appendFileSync('message2.txt', message)
        })

        /*
        Bu kod formdan aldığımız mesajı direkt göstermek yerine
        formdan alınan mesajı bize dosyada deneme olarak yazıyor.
        mesela ben deneme1 yazıp post metoduyla bunu formdan istek göndersem.
        benim dosyama deneme1 yerine deneme yazılacak
        fs.appendFileSync('message.txt', '\ndeneme')
        */
        res.statusCode = 302; //Yönlendirme kodu
        res.setHeader('Location', '/'); //Anasayfaya yönlendirdik.
        return res.end();
    }
});

server.listen(3000);

console.log('listening on port 3000');

