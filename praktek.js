// 1. Ambil data waktu sekarang
const today = new Date();

// 2. Pecah komponennya (Hari, Bulan, Tahun)
let dd = today.getDate();
let mm = today.getMonth() + 1; // +1 karena di JavaScript bulan dimulai dari 0 (Januari = 0)
const yyyy = today.getFullYear();

// 3. Tambahkan nol di depan jika angkanya di bawah 10
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

// 4. Gabungkan komponen tersebut sesuai format yang diminta soal
console.log(mm + '-' + dd + '-' + yyyy);
console.log(mm + '/' + dd + '/' + yyyy);
console.log(dd + '-' + mm + '-' + yyyy);
console.log(dd + '/' + mm + '/' + yyyy);