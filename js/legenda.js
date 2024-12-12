// Ambil elemen checkbox
const CorsCheckbox = document.getElementById("CorsCheckbox");
const horizontalCheckbox = document.getElementById("HorizontalCheckbox");
const vertikalCheckbox = document.getElementById("VertikalCheckbox");
const dilatationCheckbox = document.getElementById("DilatationCheckbox");
const maxshrCheckbox = document.getElementById("MaxshrCheckbox");


// Ambil elemen gambar
const CORSLegend = document.getElementById("CORSLegend");
const CORSLegendsContainer = document.getElementById("CORSLegends");
const horizontalLegend = document.getElementById("HorizontalLegend");
const vertikalLegend = document.getElementById("VertikalLegend");
const dilatationLegend1 = document.getElementById("DilatationLegend1");
const dilatationLegend2 = document.getElementById("DilatationLegend2");
const dilatationLegend3 = document.getElementById("DilatationLegend3");
const dilatationLegendsContainer = document.getElementById("DilatationLegends");
const maxshrLegend1 = document.getElementById("MaxshrLegend1");
const maxshrLegend2 = document.getElementById("MaxshrLegend2");
const maxshrLegend3 = document.getElementById("MaxshrLegend3");
const maxshrLegendsContainer = document.getElementById("MaxshrLegends");

// Kontainer untuk semua legenda
const legendaContent = document.getElementById("LegendaContent");

// Fungsi untuk menampilkan atau menyembunyikan gambar berdasarkan checkbox
function updateLegenda() {

    // Tampilkan gambar sesuai dengan checkbox aktif
    CORSLegend.style.display = CorsCheckbox.checked ? "block" : "none";
    horizontalLegend.style.display = horizontalCheckbox.checked ? "block" : "none";
    vertikalLegend.style.display = vertikalCheckbox.checked ? "block" : "none";
    dilatationLegend1.style.display = dilatationCheckbox.checked ? "block" : "none";
    dilatationLegend2.style.display = dilatationCheckbox.checked ? "block" : "none";
    dilatationLegend3.style.display = dilatationCheckbox.checked ? "block" : "none";
    maxshrLegend1.style.display = maxshrCheckbox.checked ? "block" : "none";
    maxshrLegend2.style.display = maxshrCheckbox.checked ? "block" : "none";
    maxshrLegend3.style.display = maxshrCheckbox.checked ? "block" : "none";

    const sliderValue = slider.value;
    if (sliderValue == 0) {
        yearLabel.textContent = "2016-2017";
    } else if (sliderValue == 1) {
        yearLabel.textContent = "2017-2018";
    } else if (sliderValue == 2) {
        yearLabel.textContent = "2018-2019";
    }

    // Tampilkan kontainer "Legenda" hanya jika ada gambar aktif
    const anyChecked = CorsCheckbox.checked || horizontalCheckbox.checked || vertikalCheckbox.checked || dilatationCheckbox.checked || maxshrCheckbox.checked;
    if (anyChecked) {
        CORSLegend.style.display = CorsCheckbox.checked ? "block" : "none";
        horizontalLegend.style.display = horizontalCheckbox.checked ? "block" : "none";
        vertikalLegend.style.display = vertikalCheckbox.checked ? "block" : "none";
        dilatationLegend1.style.display = dilatationCheckbox.checked ? "block" : "none";
        dilatationLegend2.style.display = dilatationCheckbox.checked ? "block" : "none";
        dilatationLegend3.style.display = dilatationCheckbox.checked ? "block" : "none";
        maxshrLegend1.style.display = maxshrCheckbox.checked ? "block" : "none";
        maxshrLegend2.style.display = maxshrCheckbox.checked ? "block" : "none";
        maxshrLegend3.style.display = maxshrCheckbox.checked ? "block" : "none";
    }

    // Tampilkan kontainer "Legenda" hanya jika ada gambar aktif
    legendaContent.style.display = anyChecked ? "block" : "none";
    }

// Tambahkan event listener ke checkbox
CorsCheckbox.addEventListener("change", updateLegenda);
horizontalCheckbox.addEventListener("change", updateLegenda);
vertikalCheckbox.addEventListener("change", updateLegenda);
dilatationCheckbox.addEventListener("change", updateLegenda);
maxshrCheckbox.addEventListener("change", updateLegenda);


