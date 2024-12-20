// Selektor elemen
const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
const slider = document.getElementById('customRange2');
const sliderContainer = document.getElementById('range');
const yearLabel = document.getElementById('yearLabel');

function adjustSliderPosition() {
    const sliderContainer = document.getElementById('sliderContainer'); // Elemen container slider
    if (sidebar.classList.contains("close")) {
        sliderContainer.style.left = "100px"; // Posisi slider saat sidebar collapsed
    } else {
        sliderContainer.style.left = "280px"; // Posisi slider saat sidebar expanded
    }
}

// Fungsi Collapse Sidebar
sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable"); // Tambahkan class 'close' dan 'hoverable'
  console.log("Sidebar collapsed"); // Debugging
  adjustSliderPosition(); // Panggil fungsi untuk mengatur posisi slider
});

// Fungsi Expand Sidebar
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable"); // Hapus class 'close' dan 'hoverable'
  console.log("Sidebar expanded"); // Debugging
  adjustSliderPosition(); // Panggil fungsi untuk mengatur posisi slider
});

// Submenu Toggle
const submenuItems = document.querySelectorAll(".submenu_item");
submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu"); // Tampilkan atau sembunyikan submenu
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu"); // Tutup submenu lain
      }
    });
  });
});

// Sidebar responsif
if (window.innerWidth < 768) {
  sidebar.classList.add("close"); // Collapse otomatis jika layar kecil
  adjustSliderPosition(); // Sesuaikan posisi slider
} else {
  sidebar.classList.remove("close");
  adjustSliderPosition(); // Sesuaikan posisi slider
}


// === Definisi Tahun dan Layer ===
const years = ['2016-2017', '2017-2018', '2018-2019'];
const layersByYear = {
    '2016-2017': {
        StasiunCors : layer_CORS2016_16,
        DeactiveCors : layer_CORSSulawesi_13,
        horizontal: layer_horizontal_2016_10,
        vertikal: layer_vertikal_2016_7,
        dilatation: layer_dilatation_2016_4,
        maxshr: layer_maxshr_2016_4,
        sesar: layer_SesarSulawesi_6,
    },
    '2017-2018': {
        StasiunCors:layer_CORS2017_15,
        DeactiveCors : layer_CORSSulawesi_13,
        horizontal: layer_horizontal_2017_9,
        vertikal: layer_vertikal_2017_6,
        dilatation: layer_dilatation_2017_3,
        maxshr: layer_maxshr_2017_3,
        sesar: layer_SesarSulawesi_6,
    },
    '2018-2019': {
        StasiunCors:layer_CORS2018_14,
        DeactiveCors : layer_CORSSulawesi_13,
        horizontal: layer_horizontal_2018_8,
        vertikal: layer_vertikal_2018_5,
        dilatation: layer_dilatation_2018_2,
        maxshr: layer_maxshr_2018_2,
        sesar: layer_SesarSulawesi_6,
    },
};

// Variabel untuk status aktif layer
let activeGroups = {
    StasiunCors: false,
    sesar: false,
    DeactiveCors: false,
    horizontal: false,
    vertikal: false,
    dilatation: false,
    maxshr: false,
};

// Fungsi untuk memperbarui layer berdasarkan tahun dan status aktif
function updateMap(year) {
    // Hapus semua layer terlebih dahulu
    Object.values(layersByYear).forEach(yearGroup => {
        Object.values(yearGroup).forEach(layer => {
            if (map.hasLayer(layer)) {
                map.removeLayer(layer);
            }
        });
    });

    // Tambahkan layer berdasarkan tahun dan status aktif grup
    const selectedLayers = layersByYear[year];
    Object.entries(activeGroups).forEach(([group, isActive]) => {
        if (isActive && selectedLayers[group]) {
            map.addLayer(selectedLayers[group]);
        }
    });
}

// Fungsi untuk memperbarui status aktif grup
function toggleGroup(group, isActive) {
    activeGroups[group] = isActive;
    const year = years[slider.value];
    updateMap(year);
}

// === Event Listeners ===
// Slider Event Listener

slider.addEventListener('input', () => {
    const value = slider.value; // Dapatkan nilai slider (0, 1, 2)
    const selectedYear = years[value]; // Dapatkan tahun berdasarkan slider
    updateMap(selectedYear); // Perbarui layer peta

    var offcanvas = document.getElementById('offcanvasRight').querySelector('.btn-close.text-reset');
    offcanvas.click()

});


// Checkbox Event Listeners
document.getElementById('CorsCheckbox').addEventListener('change', function (e) {
    toggleGroup('StasiunCors', e.target.checked);
});
document.getElementById('SesarCheckbox').addEventListener('change', function (e) {
    toggleGroup('sesar', e.target.checked);
});
document.getElementById('CorsCheckbox').addEventListener('change', function (e) {
    toggleGroup('DeactiveCors', e.target.checked);
});

document.getElementById('HorizontalCheckbox').addEventListener('change', function (e) {
    toggleGroup('horizontal', e.target.checked);
});

document.getElementById('VertikalCheckbox').addEventListener('change', function (e) {
    toggleGroup('vertikal', e.target.checked);
});

document.getElementById('DilatationCheckbox').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('MaxshrCheckbox').checked = false;
        }
    });

    document.getElementById('MaxshrCheckbox').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('DilatationCheckbox').checked = false;
        }
    });
document.getElementById('DilatationCheckbox').addEventListener('change', function (e) {
    toggleGroup('dilatation', e.target.checked);
});

document.getElementById('MaxshrCheckbox').addEventListener('change', function (e) {
    toggleGroup('maxshr', e.target.checked);
});

// Fungsi Collapse Sidebar
sidebarClose.addEventListener("click", () => {
    sidebar.classList.add("close");
});

// Fungsi Expand Sidebar
sidebarExpand.addEventListener("click", () => {
    sidebar.classList.remove("close");
});

// === Inisialisasi ===
// Set tahun awal dan perbarui peta
updateMap(years[0]);
adjustSliderPosition(); // Sesuaikan posisi slider saat inisialisasi


// Slider Legenda

// Fungsi untuk memperbarui gambar berdasarkan nilai slider
function updateDilatationLegends() {
    
    if (!dilatationCheckbox.checked) {
        dilatationLegendsContainer.style.display = "none";
        return; // Jangan lakukan perubahan lebih lanjut jika checkbox tidak dicentang
    }
    dilatationLegendsContainer.style.display = "block";

    const sliderValue = slider.value;

    // Update teks label tahun
    if (sliderValue == 0) {
        yearLabel.textContent = "2016-2017";
    } else if (sliderValue == 1) {
        yearLabel.textContent = "2017-2018";
    } else if (sliderValue == 2) {
        yearLabel.textContent = "2018-2019";
    }

    // Sembunyikan semua gambar dilatation
    dilatationLegend1.style.display = "none";
    dilatationLegend2.style.display = "none";
    dilatationLegend3.style.display = "none";

    // Tampilkan gambar sesuai dengan nilai slider
    if (sliderValue == 0) {
        dilatationLegend1.style.display = "block";
    } else if (sliderValue == 1) {
        dilatationLegend2.style.display = "block";
    } else if (sliderValue == 2) {
        dilatationLegend3.style.display = "block";
    }
}

// Event listener untuk slider
slider.addEventListener("input", updateDilatationLegends);

// Event listener untuk checkbox Dilatation
dilatationCheckbox.addEventListener("change", () => {
    // Perbarui gambar langsung setelah checkbox diubah
    updateDilatationLegends();
});

// Panggil fungsi untuk menginisialisasi tampilan awal
updateDilatationLegends();

// Fungsi untuk memperbarui gambar berdasarkan nilai slider
function updateMaxshrLegends() {
    
    if (!MaxshrCheckbox.checked) {
        maxshrLegendsContainer.style.display = "none";
        return; // Jangan lakukan perubahan lebih lanjut jika checkbox tidak dicentang
    }
    maxshrLegendsContainer.style.display = "block";

    const sliderValue = slider.value;

    // Update teks label tahun
    if (sliderValue == 0) {
        yearLabel.textContent = "2016-2017";
    } else if (sliderValue == 1) {
        yearLabel.textContent = "2017-2018";
    } else if (sliderValue == 2) {
        yearLabel.textContent = "2018-2019";
    }

    // Sembunyikan semua gambar dilatation
    maxshrLegend1.style.display = "none";
    maxshrLegend2.style.display = "none";
    maxshrLegend3.style.display = "none";

    // Tampilkan gambar sesuai dengan nilai slider
    if (sliderValue == 0) {
        maxshrLegend1.style.display = "block";
    } else if (sliderValue == 1) {
        maxshrLegend2.style.display = "block";
    } else if (sliderValue == 2) {
        maxshrLegend3.style.display = "block";
    }
}

// Event listener untuk slider
slider.addEventListener("input", updateMaxshrLegends);

// Event listener untuk checkbox Dilatation
maxshrCheckbox.addEventListener("change", () => {
    // Perbarui gambar langsung setelah checkbox diubah
    updateMaxshrLegends();
});

// Panggil fungsi untuk menginisialisasi tampilan awal
updateMaxshrLegends();
