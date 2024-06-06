//no1
const length = 3;
const width = 5;
const area = length * width
console.log ("Area : " + area);
console.log(3 * 5);
/*karena yg diminta adalah rumus persegi panjang
maka kita mengetahui terdapat dua variable yaitu
length 5 dan width 3 */

//no2
const panjang = 5;
const lebar = 3;

console.log(2 * (panjang + lebar));

//no3
//3a  diameter lingkaran
const radius = 5;
diameter = 2 * 5;
console.log(diameter);

//3b keliling lingkaran
keliling = ((2 * 22) / 7) * radius;
console.log(keliling);

//3c luas lingkaran
luas = (22/7) * (radius * radius);
console.log(luas);

//4
const a = 80;
const b = 65;
c = 180 - (a + b);
console.log(c);

//5
const date1 = new Date("2023-11-01");
const date2 = new Date("2023-11-22");
const bedatanggal = Math.abs(date1-date2);
const bedaHari = Math.round(bedatanggal/(1000*3600*24)); 
console.log(`perbdeaan hari tanggal 1 & tanggal 2 = ${bedaHari}`);
//rumus untuk mengubah millisecond menjadi hari

//6
const hari = 400;
const tahun = Math.floor(hari / 365);
const hari_tersisah = hari % 365;
/*pertama kita cari dulu tahunnya karena 1 tahun adalah 365 maka
kita masukan 365 hari */

const Bulan = Math.floor(hari_tersisah / 30);
const sisah_hari_setelah_bulan = hari_tersisah % 30;
/*setelah itu kita cari bulannya karena
1 bulan 30 hari maka kita masukan angka 30*/

const hasil = `${tahun} tahun, ${Bulan} bulan, ${sisah_hari_setelah_bulan} hari`;
console.log(hasil);
/* Notes : Math.floor berfungsi sebagai agar nilai tidak pecahan
agar menjadi angka satuan, module berfungsi untuk menghitung
sisah hari dan sisah hari setelah bulan*/
const hari1 = 366;
const tahun1 = Math.floor(hari1 / 365);
const hari_tersisah1 = hari1 % 365;

const Bulan1 = Math.floor(hari_tersisah1 / 30);
const sisah_hari_setelah_bulan1 = hari_tersisah1 % 30;

const hasil1 = `${tahun1} tahun, ${Bulan1} bulan, ${sisah_hari_setelah_bulan1} hari`;
console.log(hasil1);
