const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Masukkan kata/kalimat: ", function(teks) {
    const hasil = teks.split("").reverse().join("");

    console.log("Hasil dibalik:", hasil);

    input.close();
});
