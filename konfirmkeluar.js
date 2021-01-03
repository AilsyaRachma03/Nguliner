function konfirKeluar(){
    var konfir=confirm('Anda yakin ingin keluar ?')

    if (konfir==true) {
        window.location = "MasukDaftar.html";
    } else {
        return
    }
}