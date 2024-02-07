/*
Şimdi global nesnesinin ne olduğunu anlamaya çalışacağız.
Anlamamızın kolaylığı adına ilk başta window özelliğinin 
ne olduğuna bakalım.
*/

/*
Şimdi tarayıcılarda özellik vb saklanan default olarak gelen
windows objesini inceleyelim.

Eğer ben terminalde uygulamayı node app.js komutuyla çalıştırırsam
bana windows is not defined hatası verecek. Çünkü biz bu app.js'i
bir html içinde kullanmadık. O yüzden ilk başta bir index.html
adlı bir sayfa oluşturuyoruz ve oluşturduğumuz html'e
<script src="app.js"> olarak ekleyip çalıştırdığımızda console'da
karşımıza window objesi çıkıyor, bunu inceleyebiliriz. Peki bu ne
anlama geliyor ? Node.js içerisinde tarayıcıdaki gibi global bir 
erişim için window objesi bulunmamakta, bunun yerine global
adlı bir obje kullanıyoruz.

Peki biz bu window objesini ne için kullanıyoruz ?
 */

//tarayıcı

// var firstName = 'Sadık';
// console.log(firstName);
// console.log(window);
/*
Biz bu tanımlamayı yaptığımız zaman konsoldaki logları 
inceleyince görüyoruz ki konsolda Sadık yazıyor ve
window objesini incelediğimizde ise içinde firstname değişkenini
ve bu değişkenin değeri olan Sadık'ı saklıyor. Daha iyi
anlamak için scriptA scriptB(app.js dosyasının ismini değiştirdim.)
adlı iki farklı js dosyası oluşturalım. ve bunları index.html'e
atalım. Şimdi scriptA dosyasını inceleyelim.
*/

/*scriptA'dan döndüğünüze göre window'un faydalarını anlamış
olmalısınız. Asıl olay şu, nodejs'te bizim window objemiz
bulunmamakta, yani biz birden fazla dosyayı bir obje içinde
saklayıp işlem yapabilmek için window kullanmıyoruz. Bunun yerine
nodejs'te global adlı bir obje kullanıyoruz. Bunun window
ile bazı farklılıkları, tabii ki de var.*/

//nodejs

var deneme = 'Deneme';
console.log(global.deneme)

/*
Şimdi terminalde node scriptB komutunu çalıştıralım ve çıktıya
bakalım, çıktımız undefined veriyor, yani windowda'ki bu özellik
global objesinde bulunmamakta ve bu noktada karşımıza module
çözümü sunuluyor yani farklı dosyalardan gelen verilerin birlikte
kullanılabilmesi adına module kullanıyoruz.
*/

/*Bu hariç şimdilik herhangi bir farklılık bilmiyorum, onun
harici window objesinin içindeki bütün özellikleri global'de
de kullanabiliyoruz.*/

