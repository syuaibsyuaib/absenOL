var url = 'https://script.google.com/macros/s/AKfycbxVHRSVhjlHnC6500QnRrJdTX93XwIyYquvG3HIXf0jJ0LDIyQK/exec';
var isiNama = document.getElementById("namaSiswa");
var isiNisn = document.getElementById("nisn");
var kehadiran = document.getElementsByTagName('a');
//console.log(kehadiran);
for (let c = 0; c < kehadiran.length; c++) {
  kehadiran[c].addEventListener('click', absen);
}
var i = 1;

  // isiNama.innerHTML = "syuaib";
  fetch(url)
    .then(function (res) {
      return res.text();
    })
    .then(function (respon) {
      console.log(respon);
      localStorage.setItem('database', respon);
      }
    )

    absen();
    
    function absen() {
      try {
      let ambil = localStorage.getItem('database');
        let isinama = JSON.parse(ambil)[i][1];
        let isinisn = JSON.parse(ambil)[i][2];
        isiNama.innerHTML = isinama;
        isiNisn.innerHTML = isinisn;
        i++;
        } catch (error) {
          alert("data sudah habis");
        }
      }