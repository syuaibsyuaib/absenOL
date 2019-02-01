var url = 'https://script.google.com/macros/s/AKfycbxVHRSVhjlHnC6500QnRrJdTX93XwIyYquvG3HIXf0jJ0LDIyQK/exec';
var isi = document.getElementsByTagName("input");
var selectNo = document.getElementById("selectno");
var nomorUrut = document.getElementById("nomorurut").firstChild;
var dbSiswa = JSON.parse(localStorage.getItem('dbSiswa'));
var jk = document.getElementsByName('jk')[0];

if (dbSiswa.length < 2) {
  nomorUrut.innerHTML = 1;
} else {
  for (let i = 0; i < dbSiswa.length; i++) {
    if (dbSiswa[i].includes(nomorUrut.innerHTML)) {
        isi[0].value = dbSiswa[i][1]; 
        isi[1].value = dbSiswa[i][2];
    }
  }
}


nomorUrut.parentElement.addEventListener('mouseover', function(){
    selectNo.style.display = 'block';
  nomorUrut.style.display = 'none';
})

selectNo.addEventListener('mouseout', function(){
    selectNo.style.display = 'none';
  nomorUrut.style.display = 'block';
})
//tampilkan no urut, nama, nisn, jk
// 1. ambil dari dbsiswa, klo nda ada kasi kosong saja tapi no urut harus ada nomornya
//klo panjang dbsiswa 2 maka tambah i dengan angka 1 jadi di nourut menjadi 3 

/*
function inputsiswa() {
    let konfirmasi = confirm('simpanmi kah?');
    if (konfirmasi == true) {
        let noUrut = parseInt(isi[0].value);
        let Nama = isi[1].value;
        let Nisn = parseInt(isi[2].value);
        let JK = document.getElementsByTagName("select")[0].value;
        let ss = 0;
        let datasiswa = {
            nourut: noUrut,
            nama: Nama,
            nisn: Nisn,
            jk: JK,
            index: ss
        };
        let simpansiswa = [
            noUrut,
            Nama,
            Nisn,
            JK
        ];
        simpan(simpansiswa);
    }
}

function datakls() {
    let konfirmasi = confirm('simpanmi kah?');
    if (konfirmasi == true) {
        let Kelas = isi[0].value;
        let namaGuru = isi[1].value;
        let NIP = isi[2].value;
        let JK = document.getElementsByTagName("select")[0].value;
        let thnAjaran = isi[3].value;
        let ss = 1;
        let dataguru = {
            kls: Kelas,
            namaGr: namaGuru,
            nip: NIP,
            jk: JK,
            ta: thnAjaran,
            index: ss
        };
        let simpanguru = [
            Kelas,
            namaGuru,
            NIP,
            JK,
            thnAjaran
        ];
        kirim(dataguru);
    }
}

function kirim(params) {
    fetch(url, {
            method: 'POST',
            mode: "no-cors",
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(function (response) {
            console.log('sukses :' + response);
        })
        .catch(error => console.log('Errorki bos :' + error))


    for (let i = 1; i < isi.length; i++) {
        isi[i].value = "";
    }
}

function simpan(params) {
    //let dbstr = JSON.stringify(params);
    var database = JSON.parse(localStorage.getItem('database'));
    if (database == null) {
        let headtable = [["No. Urut", "Nama Siswa", "NISN", "Jenis Kelamin"]];
        headtable.push(params);
        localStorage.setItem('database', JSON.stringify(headtable));
    } else {
        let dbsementara = JSON.parse(localStorage.getItem('dbsementara'));
        database.push(params);

        //jika dbsementara kosong maka ambil database lalu buat dbsementara ditambah params
        if (dbsementara == null) {
            localStorage.setItem('dbsementara', JSON.stringify(database));
        } else {
            //jika sudah ada dbsementara
            //maka dbsementara ditambah params
            dbsementara.push(params);
            localStorage.setItem('dbsementara', JSON.stringify(dbsementara));
        }
    }
    for (let i = 1; i < isi.length; i++) {
        isi[i].value = "";
    }
}
*/
