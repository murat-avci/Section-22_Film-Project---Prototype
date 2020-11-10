const form = document.querySelector("#film-form");
const titleElement = form.querySelector("#title");
const producerElement = form.querySelector("#producer");
const urlElement = form.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];

// UI Objesini Başlatma

const ui = new UI();

// Storage objesi üretme

const storage = new Storage();

// Tüm eventleri yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function() {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardBody.addEventListener("click", deleteFilm);
}

function addFilm(e) {
    const title = titleElement.value;
    const producer = producerElement.value;
    const url = urlElement.value;

    if (title === "" || producer === "" || url === "") {
        // Hata mesajı
        ui.displayMessages("Tüm alanları doldurunuz", "danger");

    } else {
        // Yeni film
        const newFilm = new Film(title, producer, url);
        ui.addFilmToUI(newFilm); // Arayüze film ekleme
        storage.addFilmToStorage(newFilm); // Storage a film ekleme
        ui.displayMessages("Film başarı ile eklenmiştir.", "success");
    }

    ui.clearInputs(titleElement, urlElement, producerElement);

    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Silme işlemi başarılı...", "success");
    }
}

