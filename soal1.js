const hitung = require("./hitung");

function persegi(x, y) {
  x = 5;
  y = 5;
  console.log(
    "Luas dari bangun persegi dengan sisi x = " +
      x +
      " dan sisi y = " +
      y +
      " sama dengan " +
      hitung.luas(x, y)
  );
  console.log(
    "Keliling dari bangun persegi dengan sisi x = " +
      x +
      " dan sisi y = " +
      y +
      " sama dengan " +
      hitung.keliling(x, y)
  );
}
persegi();

function persegiPanjang(x, y) {
  x = 20;
  y = 10;
  console.log(
    "Luas dari bangun persegi panjang dengan sisi x = " +
      x +
      " dan sisi y = " +
      y +
      " sama dengan " +
      hitung.luas(x, y)
  );
  console.log(
    "Keliling dari bangun persegi panjang dengan sisi x = " +
      x +
      " dan sisi y = " +
      y +
      " sama dengan " +
      hitung.keliling(x, y)
  );
}
persegiPanjang();
