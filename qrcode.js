document.getElementById('generateButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    const message = document.getElementById('message');
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const qrCodeDiv = document.getElementById('qrCode');

    if (urlInput) {
        // Önceki QR kodunu temizle
        qrCodeDiv.innerHTML = '';

        // Yeni QR kodu oluştur
        new QRCode(qrCodeDiv, {
            text: urlInput,
            width: 128,
            height: 128
        });

        message.classList.remove('hidden');
        qrCodeContainer.classList.remove('hidden');
    } else {
        alert("Lütfen bir URL girin!");
    }
});
