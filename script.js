function redirectToWhatsApp(product = "") {
    var phoneNumber = "6282178938306"; // Admin's WhatsApp number
    var message = "Halo admin, saya ingin memesan produk: " + product;
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    window.location.href = whatsappURL;
}