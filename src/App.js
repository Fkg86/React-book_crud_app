import { useState } from "react";
import BookCard from "./components/BookCard";
import { toast } from "react-toastify";
import EditModal from "./components/EditModal";

function App() {
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  console.log(showEditModal, editItem);

  //ekle butonuna tiklandigi anda calisir.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookName) {
      //bildirim verme
      toast.warn("Lütfen bir kitap ismi giriniz", { autoClose: 2000 });
      //fonksiyonu durdurma
      return;
    }

    //Kitap icin gerekli bilgilere sahip obje olusturma
    const newBook = {
      id: new Date().getTime(),
      title: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    };

    //olusturulan kitap objesini kitaplar dizinine aktar.
    //spread operatör önceden eklenenleri muhafaza eder.
    setBooks([...books, newBook]);

    //eleman eklenince inputu sifirla
    setBookName("");

    //bildirim ver.
    toast.success("Kitap eklendi", { autoClose: 2500 });
  };

  //modali ele alma
  const handleModal = (id) => {
    //id yi state aktarma
    setDeleteId(id);
    //modali acma
    setShowConfirm(true);
  };

  // sil butonuna bastiginda calisir.
  const handleDelete = (deletingId) => {
    //silinicek id ye eşit olmayan objeleri al ve bir diziye aktar
    const filtred = books.filter((item) => item.id !== deletingId);
    //olusan diziyi state aktar
    setBooks(filtred);

    //bildirim ver.
    toast.error("Kitap silindi", { autoClose: 2000 });
  };

  // okundu butonuna bastiginda calisir.
  //1-okundu degerini tersine cevir.
  //2-books dizisnin bir kopyasini olustur.
  //3-düzenlenecek olan kitabin dizideki sirasini bul.>findIndex
  //4-eski kitabi kopya diziden cikar yerine güncellenmis versiyonu koy.>splice
  //5-güncel olan kopya diziyi state'e aktar.

  const handleRead = (book) => {
    const updatedBook = { ...book, isRead: !book.isRead };

    const cloneBooks = [...books];

    const index = books.findIndex((item) => item.id === book.id);

    cloneBooks.splice(index, 1, updatedBook);

    setBooks(cloneBooks);
  };

  //kitabi günceller
  const handleEditBook = () => {
    //degisecek elemanin dizideki sirasini bulur
    const index = books.findIndex((book) => book.id === editItem.id);

    //kitaplar dizisinin kopyasini olusturma
    const cloneBooks = [...books];

    //eski kitabi diziden cikar yerine yeniyi koy
    cloneBooks.splice(index, 1, editItem);

    //state i güncelle yani kopya diziyi state e aktar.

    setBooks(cloneBooks);

    //modal i kapatma
    setShowEditModal(false);
  };

  return (
    <div>
      {/* header */}
      <div className="bg-dark text-light px-5 py-2 fs-5 text-center">
        Kitap Kurdu
      </div>
      {/* container */}
      <div className="container border">
        {/* form */}
        <form onSubmit={handleSubmit} className="d-flex gap-3 mt-4">
          <input
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            className="form-control shadow"
            type="text"
          />
          <button className="btn btn-warning shadow">Ekle</button>
        </form>

        <div className="d-flex flex-column gap-3 py-5">
          {/* eger state icerisi bossa ekrana bunu yaz */}
          {books.length === 0 && <h4>Henüz herhangi bir kitap eklenmedi</h4>}

          {/* eger state icerisinde eleman varsa onlari listele */}

          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              handleModal={handleModal}
              handleRead={handleRead}
              setShowEditModal={setShowEditModal}
              setEditItem={setEditItem}
            />
          ))}
        </div>
      </div>

      {/* modali tanimlama */}
      {showConfirm && (
        <div className="confirm-modal">
          <div className="modal-inner shadow">
            <h5>Silmek istiyor musunuz?</h5>
            <button
              className="btn btn-warning"
              onClick={() => setShowConfirm(false)}
            >
              Vazgec
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDelete(deleteId);
                setShowConfirm(false);
              }}
            >
              Onayla
            </button>
          </div>
        </div>
      )}

      {/* düzenleme modali */}
      {showEditModal && (
        <EditModal
          setShowEditModal={setShowEditModal}
          setEditItem={setEditItem}
          editItem={editItem}
          handleEditBook={handleEditBook}
        />
      )}
    </div>
  );
}

export default App;
