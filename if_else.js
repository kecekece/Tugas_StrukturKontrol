//struktur kontrol if, elseif, else.
let aku = "saya"

if (aku === "punya dia") {
    alert("tinggal ta'aruf")
}else if (aku === "tidak") {
    alert("cari dulu");
}else{
    alert("fokus belajar");
}

//struktur kontrol switch 
let hari = "sabtu";

switch (hari) {
    case "senin":
        alert("hari ini perkulihan anda ada 1 matkul");
        break;

        case "selasa":
            alert("hari ini perkulihan anda ada 1 matkul");
            break;

        case "rabu":
            alert("hari ini perkulihan anda ada 4 matkul");
            break;

        case "kamis":
            alert("hari ini perkulihan anda ada 3 matkul");
            break;

        case "jum'at":
            alert("ada 2 sesi pratikum pada perkuliahan hari ini");
            break;
        
        default:
            alert("libur, dan jangan lupa mengerjakan tugas :) :)");
            break;
}


//struktur kontrol while
aku = true;
while (aku) {
    console.log("aku sayang km");
    aku = confirm('yakinkan lagi?');
}

//struktur kontrol for
var Aku = 1;
var Sayang = 100;
var YangMau = 0;

while (YangMau <= Sayang) {
    console.log('Berapa Persen yang mau pada mu =' + YangMau + 'Dengan Presentase Sayang =');
    Sayang++;
}
for (YangMau = 2; YangMau <= Aku; YangMau++) {
    console.log('Ternyata Presentase yang mau sama aku yaitu = ' + YangMau);
    
}

//struktur kontrol do, while
let kamu = 1;

do {
    console.log(kamu);
    kamu++;
} while (kamu <= 5);


//struktur kontrol function
function cinta(aku, dia) {
    var sayang;
    sayang = a + b;

    console.log(sayang);
}

