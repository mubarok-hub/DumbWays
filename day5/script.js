// alert('Isi Data Berikut');
// let lagi = true;

// while (lagi === true) {
//     let nama = prompt ('Masukan Nama');
//     alert ('Nama saya ' + nama);

//     let email = prompt ('Masukan Email');
//     alert ('Ini email saya ' + email);

//     let noTelp = prompt ('Masukan Nomor Telfon');
//     alert ('Ini nomor telfon saya ' + noTelp);

//     let pesan = prompt ('Tulis pesan');
//     alert (pesan);

    
//     lagi = confirm('coba lagi?');
// }

// alert('Terima Kasih');

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Supaya form tidak reload halaman
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
  
      console.log("Full Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Subject:", subject);
      console.log("Message:", message);
    });
  });
  
