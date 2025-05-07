// DOM Selection
// document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = "cyan";
judul.style.backgroundColor = "yellow";
judul.innerHTML = "Syahril Mubarok"; //mengubah isi nya dengan javascript

// document.getElementsByTagName()
// -> HTMLCollections
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'grey';
}

const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = '50px';

// document.getElementsByClassName()
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0]
p1.innerHTML = 'Ini di ubah dari javascript';