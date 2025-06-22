function hitungLuas() {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(alas) || isNaN(tinggi)) {
        alert("Masukkan nilai alas dan tinggi yang valid!");
        return;
    }

    const luas = 0.5 * alas * tinggi;

    document.getElementById("hasilLuas").innerHTML = 
        `L = 1/2 x a x t<br>L = 1/2 x ${alas} x ${tinggi}<br>L = ${luas}`;
}
