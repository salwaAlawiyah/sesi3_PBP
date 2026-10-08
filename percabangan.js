const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const KALORI_PER_MENIT = {
    lari: 60 / 5,
    pushUp: 200 / 30,
    plank: 5 / 1
};

function hitungKalori() {
    console.log("=== Program Penghitung Kalori Olahraga ===");
    
    rl.question("Masukkan durasi Lari (dalam menit): ", (menitLari) => {
        rl.question("Masukkan durasi Push-up (dalam menit): ", (menitPushUp) => {
            rl.question("Masukkan durasi Plank (dalam menit): ", (menitPlank) => {
                
                const dLari = parseFloat(menitLari) || 0;
                const dPushUp = parseFloat(menitPushUp) || 0;
                const dPlank = parseFloat(menitPlank) || 0;
                
                const kaloriLari = dLari * KALORI_PER_MENIT.lari;
                const kaloriPushUp = dPushUp * KALORI_PER_MENIT.pushUp;
                const kaloriPlank = dPlank * KALORI_PER_MENIT.plank;
                
                const totalKalori = kaloriLari + kaloriPushUp + kaloriPlank;
                
                console.log("\n=== Ringkasan Hasil ===");
                console.log(`- Lari (${dLari} menit)     : ${kaloriLari.toFixed(2)} kalori`);
                console.log(`- Push-up (${dPushUp} menit) : ${kaloriPushUp.toFixed(2)} kalori`);
                console.log(`- Plank (${dPlank} menit)   : ${kaloriPlank.toFixed(2)} kalori`);
                console.log(`-----------------------------------`);
                console.log(`Total Kalori Terbakar       : ${totalKalori.toFixed(2)} kalori\n`);
                
                rl.close();
            });
        });
    });
}

hitungKalori();