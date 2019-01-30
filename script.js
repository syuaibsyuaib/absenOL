var url = 'https://script.googleusercontent.com/macros/echo?user_content_key=sWyINGjoQttmn15I3LxyF_6HtH60eY_g7Xcv7HZ-EUAgXcsbtOOqe1w8QPLkPF9gti117bOEZxhbY8rIv-bdsEc_xJtBcyAtm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHQ6uEn5Fxb9yVGFBA8jPZ6AncQ_mT73P396ioXmH6QoOiyWH9UwssC1-4-if9ZjPZKaPkzdqZk4&lib=MruXFPL-DdSNFtcuBRLX8xsgXc4k5ckPl';
dbSiswa = localStorage.getItem('dbSiswa');
//1. jika dbsementara tidak ada maka download database
let head = [["No.", "Nama", "NISN", "JK"]];
if(dbSiswa == null){
    fetch(url)
    .then(function (res) {
        if(res.ok){
        return res.text();
            }
        tes();
    })
    .then(function (respon) {
        let database = respon;
        let dbGoogle = JSON.parse(database);
        head.push(dbGoogle);
    localStorage.setItem("dbSiswa", JSON.stringify(dbGoogle));
    })
    function tes(){
        localStorage.setItem("dbSiswa", JSON.stringify(head));
        }

/*if(dbSiswa == null){
    fetch(url)
    .then(function (res) {
        return res.text()
    })
    .then(function (respon) {
        var database = JSON.stringify(respon);
        localStorage.setItem('database', respon);
        db = JSON.parse(localStorage.getItem('database'));
    })
  //  .catch(error => alert(error))
}

function tes(){
//2. jika database tidak ada maka alert 'input siswa dulu'
    if(db.length < 2){
        alert ('tidak ada data siswa, harus diinput terlebih dahulu');
       // window.location.href = 'inputsiswa.html';
//2.else. copy database jd dbsementara
               } 
}
*/
