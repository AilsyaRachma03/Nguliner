function terimainput(){
    var a=document.getElementById('Nama').value;
    var b=document.getElementById('Email').value;
    var c=document.getElementById('Kritik').value;
    var d=document.getElementById('Saran').value;

    if(!a|| !b|| !c|| !d){
        alert("Kritik dan saran yang anda masukan Kosong, Masukan Ulang"); 
        return;
    }else{
        alert("Data Berhasil Dikirm");
    }
}