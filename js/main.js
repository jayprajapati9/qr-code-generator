let QrImg = document.getElementById('QrImg')
let DownloadBtn = document.getElementById('DownloadBtn')

chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
    var url = tabs[0].url;
    var apiurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
    QrImg.src = apiurl;

    document.getElementById('DownloadBtn').addEventListener('click', function () {
        //var InputUrl = UrlInput.value;
        var apiurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}&download=1`;
        DownloadBtn.href = apiurl;
        //QrImg.src = apiurl;
    });

});
