function tampilkan(nama) {
  document.getElementById("segitiga").classList.add("hidden");
  document.getElementById("jajarGenjang").classList.add("hidden");
  document.getElementById("btnSegitiga").classList.remove("active");
  document.getElementById("btnJajar").classList.remove("active");

  document.getElementById(nama).classList.remove("hidden");
  if (nama === "segitiga") {
    document.getElementById("btnSegitiga").classList.add("active");
  } else {
    document.getElementById("btnJajar").classList.add("active");
  }
}
