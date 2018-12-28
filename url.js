var url = 'https://script.google.com/macros/s/AKfycbxVHRSVhjlHnC6500QnRrJdTX93XwIyYquvG3HIXf0jJ0LDIyQK/exec';
var isi = document.getElementsByTagName("input");

function inputsiswa() {
    let konfirmasi = confirm('simpanmi kah?');
    if (konfirmasi == true) {
        let noUrut = isi[0].value;
        let Nama = isi[1].value;
        let Nisn = isi[2].value;
        let JK = document.getElementsByTagName("select")[0].value;
        let ss = 0;
        let datasiswa = {
            nourut: noUrut,
            nama: Nama,
            nisn: Nisn,
            jk: JK,
            index: ss
        };
        kirim(datasiswa);
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