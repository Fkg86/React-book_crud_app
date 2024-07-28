# React CRUD App

A book CRUD App project has been developed.

# Used technologies

- HTML
- CSS
- Java Script
- React

# Screenshots

![](1.jpg)

# GIF

![](React_Book_CRUD_App.gif)

# YOL HARITASI

<h1>CRUD App</h1>
<p>Create-Read-Update-Delete</p>
<p>Oluştur-Oku-Düzenle-Sil</p>

<ul>
    <li>
        Projeye bootstrapi dahil et
        > index.htmle bootstrap cdni ekle
    </li>
    <li>
        1- Yeni eklenicek elamanı almak için form oluştur:
        form içserisinden gelen verileri al ve state aktar
        ekle butonuna basıldığı anda forma girilen bilgilerle beraber yeni obje oluştur
        oluşturulan objenin değerleri: tarih, kitapIsmi, id, okunduMu
        oluşan objeyi kitaplar isminde bir diziye aktar
        obje oluşturulduktan inputu sıfırla
    </li>
    <li>
        2- books Stateinde tutulan kitapları al ve map methodu ile listele(ekrana bas)
        > eğer state boşsa ekrana "henüz kitap eklenmedi" yaz
        > BookCard bileşenine kitap bilgilerini prop olrak gönder
        > BookCard bileşenin kitapla ilgili bütün özellikleri göster
    </li>
    <li>
        3- Kitap Silme: 
        > herhangi bir kitabın sil butonuna basıldığında 
        > çalışan fonkisyona silinicek olanın idsi gitsin
        > gelen idyi fonkisyona parametre olaraka  al 
        > silinicek id ye eşit olmayan objeleri al ve bir diziye aktar
        > oluşan diziyi state aktar
    </li>

  <li>
        4- Kitabı Okundu Olarak işaretle:
        > okundu butonuna basılınca çalışan fonkisyona kitabı gönder
        > kitabın isRead değerini tersine çevir
        > dizi içerisinde değişecek olan elemanı bul
        > o elemanı çıkar ve yerine yenisini ekle
    </li>

   <li>

        5- Düzenleme İşlemini Yap:
        > Düzenle butonuna tıklanıdğında ekrana bir modal çıksın
        > ve düzenlenicek kitabı app.jse aktarsın (editItem)
        > Modalda: Kitap ismini değiştirmek için bir input
        > input her değiştiğinde editItem değişkenini günceller ve app.jse aktarır
        > Vazgeç Butonu > Modalı Kapatır
        > Kaydet Butonu > app.jsde bulunan handleEditBook çalıştırır
        > çalışan fonkisyon diziden eski elemanı çıkarır yerine yenisini koyar

   </li>

</ul>
