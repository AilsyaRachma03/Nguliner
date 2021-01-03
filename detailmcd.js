function terimainput(){
    var a=document.getElementById('koment').value;

    if(!a){
        alert("Ada Data Yang Kosong Masukan Ulang"); 
        return;
    }else{
        alert("Data Berhasil disimpan");
    }
}