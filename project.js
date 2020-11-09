const form = document.querySelector("#film-form");
const titleElement = form.querySelector("#title");
const directorElement = form.querySelector("#director");
const urlElement = form.querySelector("#url");

// UI Objesini Başlatma

const ui = new UI();

// Tüm eventleri yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        // Hata mesajı
        ui.displayMessages("Tüm alanları doldurunuz", "danger");

    } else {
        // Yeni film
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm); // Arayüze film ekleme
        ui.displayMessages("Film başarı ile eklenmiştir.", "success");
    }

    ui.clearInputs(titleElement, urlElement, directorElement);

    e.preventDefault();
}

