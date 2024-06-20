// Membuat object data siswa
const dataSiswa = [
  {
    nama: "Budi",
    email: "budi@gmail.com",
    umur: new Date("12-6-2002"),
    nilai: 80,
  },
  {
    nama: "Ani",
    email: "ani@yahoo.com",
    umur: new Date("7-25-2001"),
    nilai: 90,
  },
  {
    nama: "Caca",
    email: "caca@hotmail.com",
    umur: new Date("9-16-2000"),
    nilai: 75,
  },
  {
    nama: "Dedi",
    email: "dedi@gmail.com",
    umur: new Date("10-10-1999"),
    nilai: 85,
  },
];

// Function untuk mencari nilai tertinggi
function nilaiTertinggi(data) {
  let nilaiTertinggi = data[0].nilai;
  for (let i = 1; i < data.length; i++) {
    if (data[i].nilai > nilaiTertinggi) {
      nilaiTertinggi = data[i].nilai;
    }
  }
  return nilaiTertinggi;
}

// Function untuk mencari nilai terendah
function nilaiTerendah(data) {
  let nilaiTerendah = data[0].nilai;
  for (let i = 1; i < data.length; i++) {
    if (data[i].nilai < nilaiTerendah) {
      nilaiTerendah = data[i].nilai;
    }
  }
  return nilaiTerendah;
}

// Function untuk menghitung rata-rata nilai
function rataRataNilai(data) {
  let totalNilai = 0;
  for (let siswa of data) {
    totalNilai += siswa.nilai;
  }
  return totalNilai / data.length;
}

// Function untuk mencari umur tertinggi
function umurTertinggi(data) {
  let umurTertinggi = data[0].umur;
  for (let i = 1; i < data.length; i++) {
    if (data[i].umur > umurTertinggi) {
      umurTertinggi = data[i].umur;
    }
  }
  return umurTertinggi;
}

function hitungStatistikUmur(students) {
  if (!Array.isArray(students) || students.length === 0) {
    return {
      Tertinggi: null,
      Terendah: null,
      RataRata: null,
    };
  }

  // Menghitung total umur dalam tahun
  const now = new Date();
  let totalUmur = 0;
  let umurTertinggi = -Infinity;
  let umurTerendah = Infinity;

  //forEach -> mengulang setiap elemen dalam array
  //dan menjalankan fungsi callback untuk setiap elemen
  students.forEach((student) => {
    const ageInMilliseconds = now - student.umur;
    const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
    totalUmur += ageInYears;
    umurTertinggi = Math.max(umurTertinggi, ageInYears);
    umurTerendah = Math.min(umurTerendah, ageInYears);
  });

  // Hitung rata-rata umur
  const jumlahTanggal = students.length;
  const rataRataUmur = totalUmur / jumlahTanggal;

  return {
    Tertinggi: umurTertinggi,
    Terendah: umurTerendah,
    RataRata: rataRataUmur,
  };
}

const statistikUmur = hitungStatistikUmur(dataSiswa);
// Menampilkan hasil
console.log("Nilai Tertinggi:", nilaiTertinggi(dataSiswa));
console.log("Nilai Terendah:", nilaiTerendah(dataSiswa));
console.log("Rata-rata Nilai:", rataRataNilai(dataSiswa));
console.log(statistikUmur);
//2
class Produk {
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
  }
}

class Transaksi {
  constructor() {
    this.produk = []; // Array untuk menyimpan data produk
    this.jumlah = 0; // Jumlah total produk dalam transaksi
  }

  // Metode untuk menambahkan produk ke keranjang
  tambahkanKeKeranjang(namaProduk, hargaProduk) {
    const produkBaru = new Produk(namaProduk, hargaProduk);
    this.produk.push(produkBaru);
    this.jumlah++;
  }

  // Metode untuk menampilkan total transaksi saat ini
  tampilkanTotal() {
    let totalHarga = 0;
    this.produk.forEach((produk) => {
      totalHarga += produk.harga;
    });
    console.log(`Total transaksi: $${totalHarga.toFixed(2)}`);
  }

  // Metode untuk menyelesaikan transaksi dan mengembalikan data transaksi
  checkout() {
    const dataTransaksi = {
      produk: this.produk,
      jumlah: this.jumlah,
    };
    return dataTransaksi;
  }
}

// Contoh penggunaan:
const transaksiSaya = new Transaksi();
transaksiSaya.tambahkanKeKeranjang("Buku", 15.99);
transaksiSaya.tambahkanKeKeranjang("Pensil", 2.49);
transaksiSaya.tampilkanTotal();

const hasilTransaksi = transaksiSaya.checkout();
console.log(hasilTransaksi);

//BY LECTURE
//1
class StudentCalculator {
  constructor(students) {
    this.students = students;
  }

  calculate() {
    let maxScore, minScore, avgScore, maxAge, minAge, avgAge;

    const sortScore = this.students.sort((a, b) => a.score - b.score);
    const sumScore = this.students.reduce((a, b) => a + b.score, 0);
    maxScore = sortScore[sortScore.length - 1].score;
    minScore = sortScore[0].score;
    avgScore = sumScore / this.students.length;

    const sortAge = this.students.sort((a, b) => a.age - b.age);
    const sumAge = this.students.reduce((a, b) => a + b.age, 0);
    maxAge = sortAge[sortAge.length - 1].age;
    minAge = sortAge[0].age;
    avgAge = sumAge / this.students.length;

    return {
      score: {
        highest: maxScore,
        lowest: minScore,
        average: avgScore,
      },
      age: {
        highest: maxAge,
        lowest: minAge,
        average: avgAge,
      },
    };
  }
}

const students = [
  {
    name: "budi",
    email: "budi@mail.com",
    age: 20,
    score: 85,
  },
  {
    name: "siti",
    email: "siti@mail.com",
    age: 21,
    score: 92,
  },
  {
    name: "joko",
    email: "joko@mail.com",
    age: 19,
    score: 78,
  },
];

const studentCalculator = new StudentCalculator(students);

const result = studentCalculator.calculate();
console.log(result);

//2
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.cart = [];
    this.total = 0;
  }

  addToCart(product, qty) {
    const existingProduct = this.cart.find(
      (item) => item.product.name === product.name
    );

    if (existingProduct) {
      existingProduct.qty += qty;
    } else {
      this.cart.push({ product, qty });
    }

    this.total += product.price * qty;
  }

  showCart() {
    console.log(this.cart);
  }

  showTotal() {
    console.log(this.total);
  }

  checkout(userMoney) {
    if (userMoney < this.total || !userMoney) {
      return "Transaction failed";
    }

    return {
      total: this.total,
      message: "Transaction Success",
      remainingFunds: userMoney - this.total,
    };
  }
}
const product1 = new Product("buku", 5000);
const product2 = new Product("pencil", 2000);

const transaction = new Transaction();

transaction.addToCart(product1, 2);
transaction.addToCart(product1, 5);
transaction.addToCart(product2, 1);

transaction.showCart();
transaction.showTotal();