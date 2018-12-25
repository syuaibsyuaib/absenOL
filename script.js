var url = 'https://script.google.com/macros/s/AKfycbxVHRSVhjlHnC6500QnRrJdTX93XwIyYquvG3HIXf0jJ0LDIyQK/exec';
var isi = document.getElementsByTagName("input");

var isiNama = document.getElementById("namaSiswa");
var isiNisn = document.getElementById("nisn");
var kehadiran = document.getElementsByTagName('a');
//console.log(kehadiran);
for (let c = 0; c < kehadiran.length; c++){
  kehadiran[c].addEventListener('click', absen);
}
var i = 1;
function absen() {
 
  // isiNama.innerHTML = "syuaib";
  fetch(url)
    .then(function (res) {
      return res.text();
    })
    .then(function (respon) {
      console.log(JSON.parse(respon)); 
      let isinama = JSON.parse(respon)[i][1];
        let isinisn = JSON.parse(respon)[i][2];
        isiNama.innerHTML = isinama;
        isiNisn.innerHTML = isinisn;
        i++;
    })
}

function inputsiswa() {

  let noUrut = isi[0].value;
  let Nama = isi[1].value;
  let Nisn = isi[2].value;
  let JK = document.getElementsByTagName("select")[0].value;
  let ss = 0;

  var datasiswa = {
    nourut: noUrut,
    nama: Nama,
    nisn: Nisn,
    jk: JK,
    index: ss
  };

  fetch(url, {
      method: 'POST',
      mode: "no-cors",
      body: JSON.stringify(datasiswa),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
}

function datakls() {

  let Kelas = isi[0].value;
  let namaGuru = isi[1].value;
  let NIP = isi[2].value;
  let JK = document.getElementsByTagName("select")[0].value;
  let thnAjaran = isi[3].value;
  let ss = 1;
  var dataguru = {
    kls: Kelas,
    namaGr: namaGuru,
    nip: NIP,
    jk: JK,
    ta: thnAjaran,
    index: ss
  };

  fetch(url, {
      method: 'POST',
      mode: "no-cors",
      body: JSON.stringify(dataguru),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
}