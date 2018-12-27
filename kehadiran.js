var url = 'https://script.google.com/macros/s/AKfycbxVHRSVhjlHnC6500QnRrJdTX93XwIyYquvG3HIXf0jJ0LDIyQK/exec';
var isiNama = document.getElementById("namaSiswa");
var isiNisn = document.getElementById("nisn");
var kehadiran = document.getElementsByTagName('a');
var selectEl = document.getElementsByTagName('select')[0];
var container = document.getElementsByClassName('container')[0];

isiNama.addEventListener('mouseover', namaSiswaHide);
selectEl.addEventListener('mouseout', namaSiswaOccur);

function namaSiswaHide() {
  isiNama.style.display = 'none';
  selectEl.style.display = 'block';
}

function namaSiswaOccur() {
  isiNama.style.display = 'block';
  selectEl.style.display = 'none';
}

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
      localStorage.setItem('database', respon);
      
      let db = JSON.parse(localStorage.getItem('database'));
      for (let j = 1; j < db.length; j++) {
        let node = document.createElement("option");
        let isinama = db[j][1];
        let textnode = document.createTextNode(isinama);
        node.appendChild(textnode);
        selectEl.appendChild(node);
      }
    }
  )

absen();

function absen() {
  try {
    let db = JSON.parse(localStorage.getItem('database'));
    let isinama = db[i][1];
    let isinisn = db[i][2];
    isiNama.innerText = selectEl.value;
    isiNisn.innerHTML = isinisn;
    i++;
    console.log(selectEl.value);
  } catch (error) {
    alert("data sudah habis");
  }
}