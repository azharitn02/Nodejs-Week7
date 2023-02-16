const hitung = require("./hitung");

let x;
let y;

function persegi(x, y) {
  x = 50;
  y = 50;
  console.log(
    "Luas dari bangun persegi dengan sisi x = " +
      x +
      " dan sisi y = " +
      y +
      " sama dengan " +
      hitung.kali(x, y)
  );
}
persegi();

function persegiPanjang(x, y) {
  x = 20;
  y = 40;
  console.log(
    "Luas dari bangun persegi panjang dengan sisi x = " +
      x +
      " dan sisi y = " +
      y +
      " sama dengan " +
      hitung.kali(x, y)
  );
}
persegiPanjang();
