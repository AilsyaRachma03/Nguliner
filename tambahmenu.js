function terimainput(){
    var a=document.getElementById('Nama').value;
    var b=document.getElementById('Alamat').value;
    var c=document.getElementById('rt1').value;
    var d=document.getElementById('rt2').value;
    var e=document.getElementById('rt3').value;
    var f=document.getElementById('jadwal').value;
    var g=document.getElementById('desk').value;

    if(!a|| !b|| !c|| !d|| !e|| !f|| !g){
        alert("Ada Data Yang Kosong Masukan Ulang"); 
        return;
    }else{
        alert("Data Berhasil disimpan");
    }
}

function terimainput2(){
    var h=document.getElementById('makan').value;
    var i=document.getElementById('harga1').value;
    var j=document.getElementById('kategori').value;
    var k=document.getElementById('des').value;
    var l=document.getElementById('ft1').value;

    if(!h|| !i|| !j|| !k|| !l){
        alert("Ada Data Yang Kosong Masukan Ulang"); 
        return;
    }else{
        alert("Data Berhasil disimpan");
    }
}