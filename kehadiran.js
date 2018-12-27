var url = 'https://script.googleusercontent.com/macros/echo?user_content_key=sWyINGjoQttmn15I3LxyF_6HtH60eY_g7Xcv7HZ-EUAgXcsbtOOqe1w8QPLkPF9gti117bOEZxhbY8rIv-bdsEc_xJtBcyAtm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHQ6uEn5Fxb9yVGFBA8jPZ6AncQ_mT73P396ioXmH6QoOiyWH9UwssC1-4-if9ZjPZKaPkzdqZk4&lib=MruXFPL-DdSNFtcuBRLX8xsgXc4k5ckPl';

var namaSiswa = document.getElementById('namaSiswa');
var span = document.getElementsByTagName('span');
var nisn = document.getElementById('nisn');
var select = document.getElementsByTagName('select')[0];
var btn = document.getElementsByTagName('button');

//jika div namaSiswa hover maka sembuyikan namaSiswa dan tampilkan select
namaSiswa.addEventListener('mouseover', () => {namaSiswa.style.display = 'none'; select.style.display = 'block'});
select.addEventListener('mouseout', () => {namaSiswa.style.display = 'block'; select.style.display = 'none'});
// ambil data dan simpan dalam local storage
fetch(url)
    .then(function (res) {
        return res.text()
    })
    .then(function (respon) {
        var database = JSON.stringify(respon);
        localStorage.setItem('database', respon);
        db = JSON.parse(localStorage.getItem('database'));
        tes();
    })



//masukkan data ke dalam select

function tes() {
    for (var i = 1; i < db.length; i++) {
        var node = document.createElement("option");
        var textnode = document.createTextNode(db[i][1]);
        node.appendChild(textnode);
        select.appendChild(node);
    }
    //isi select aktif dimasukkan dalam div namaSiswa
    select.addEventListener('change', () => span[0].innerHTML = select.value);
    span[0].innerHTML = select.value;

    //jika tombol hadir || izin || sakit || abstain diklik maka ganti isi select dan namaSiswa
    for (var j = 0; j < btn.length; j++) {
        btn[j].addEventListener('click', gantiIsiDiv);
    }


    function gantiIsiDiv() {
        try {
            var indexSiswa = db.findIndex(k => k[1] == span[0].innerHTML); //ambil index nama yg tampil saat ini
            span[0].innerHTML = db[indexSiswa + 1][1]; //isi nama siswa dengan 
            select.value = span[0].innerHTML;
            console.log(indexSiswa);
        } catch (error) {
            alert('data sudah habis');
        }
    }

}