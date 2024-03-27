$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // Ambil elemen span dengan id "currentYear"
  var currentYearElement = document.getElementById("currentYear");
  // Ambil tahun saat ini
  var currentYear = new Date().getFullYear();
  // Isi nilai tahun saat ini ke dalam elemen span
  currentYearElement.textContent = currentYear;

  // Ambil semua elemen dengan kelas "social-link"
  var socialLinks = document.querySelectorAll(".social-link");

  // Loop melalui setiap elemen
  socialLinks.forEach(function (link) {
    // Tambahkan event click
    link.addEventListener("click", function (event) {
      // Mencegah tindakan default dari link
      event.preventDefault();
      // Ambil layanan media sosial dari atribut data-service
      var service = this.getAttribute("data-service");
      // Tampilkan pesan
      alert("Apakah ada yang bisa saya bantu melalui " + service + "?");

      // Jika layanan adalah WhatsApp, buka tautan WhatsApp dengan nomor tujuan
      if (service === "WhatsApp") {
        var number = this.getAttribute("data-number");
        window.open("https://wa.me/" + number, "_blank");
      }
      // Jika layanan adalah Instagram, buka profil Instagram dengan ID
      else if (service === "Instagram") {
        var id = this.getAttribute("data-id");
        window.open("https://instagram.com/" + id, "_blank");
      }
      // Jika layanan adalah LinkedIn, buka profil LinkedIn dengan URL
      else if (service === "LinkedIn") {
        var url = this.getAttribute("data-url");
        window.open(url, "_blank");
      }
      // Tambahkan kondisi untuk layanan media sosial lainnya di sini jika diperlukan
    });
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});
