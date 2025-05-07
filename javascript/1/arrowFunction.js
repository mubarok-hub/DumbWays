let tampilPesan = function (name) {
    alert ('halo1 ' + name);
}

tampilPesan('Alin1');

let tampilPesann = (nama) => {
    alert ('halo2 ' + nama);
}

tampilPesann('Alin2');

const tampilNama = function (nama1)  {
    return `Halo, ${nama1}`;
}
console.log(tampilNama('Alin'));

const tampilNama1 = (name2) => {
    return `Halo, ${name2}`
}
console.log(tampilNama1 ('Mubarok'));

//implisit return 
// kalo parameter nya cuma 1 ga perlu pake () {} dan return
const tampilNama3 = name3 => `Halo, ${name3}`;

console.log(tampilNama3 ('Mubarok2'));