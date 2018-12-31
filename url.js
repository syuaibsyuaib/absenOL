var url = 'https://script.google.com/macros/s/AKfycbxVHRSVhjlHnC6500QnRrJdTX93XwIyYquvG3HIXf0jJ0LDIyQK/exec';
var isi = document.getElementsByTagName("input");

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
    let database = JSON.parse(localStorage.getItem('database'));
    let dbsementara = JSON.parse(localStorage.getItem('dbsementara'));
    database.push(params);

//jika dbsementara kosong maka ambil database lalu buat dbsementara ditambah params
if(dbsementara == null) {
localStorage.setItem('dbsementara', JSON.stringify(database));
} else {
//jika sudah ada dbsementara
//maka dbsementara ditambah params
dbsementara.push(params);
localStorage.setItem('dbsementara', JSON.stringify(dbsementara));
}
}