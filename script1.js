function redirectToWhatsApp() {
    var name = document.getElementById('nama').value;
    var daerah = document.getElementById('daerah').value;

    if (name && daerah) {
        var whatsappURL = "https://api.whatsapp.com/send?phone=6285368939382&text=Halo%20admin,%20saya%20" +
            encodeURIComponent(name) + "%20dari%20" + encodeURIComponent(daerah) + "%20ingin%20mendaftar.";
        window.location.href = whatsappURL;
    } else {
        alert("Silakan isi semua data.");
    }
}