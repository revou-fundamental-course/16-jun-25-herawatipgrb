document.getElementById("triangle-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const sisi1 = parseFloat(document.getElementById("sisi1").value);
    const sisi2 = parseFloat(document.getElementById("sisi2").value);
    const sisi3 = parseFloat(document.getElementById("sisi3").value);

    if (isNaN(alas) || isNaN(tinggi) || isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
        alert("Harap isi semua kolom dengan benar!");
        return;
    }

    const luas = 0.5 * alas * tinggi;
    const keliling = sisi1 + sisi2 + sisi3;

    document.getElementById("luas").textContent = `Luas: ${luas.toFixed(2)} cm²`;
    document.getElementById("keliling").textContent = `Keliling: ${keliling.toFixed(2)} cm`;
    document.getElementById("result").classList.remove("hidden");
});
