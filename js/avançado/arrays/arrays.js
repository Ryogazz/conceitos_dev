const nomes = ['dash', 'Yohana', 'larey'];
nomes [1] = 'alias';
delete nomes [2];
console.log(nomes);

nomes.push('loren');
console.log(nomes);

nomes.unshift('tomei lugar do primeiro');
console.log(nomes);

const corte = nomes.slice(1,3);
console.log(corte);

const nome = 'J K Dash';
const separar = nome.split(' ');
console.log(separar);

const juntar = separar.join(' ');
console.log(juntar);

// Splice //
console.log('----------------splice---------------');
// .splice(indice, delete, elemento 1, elemento2, elemento3)
const nomes2 = ['Dash', 'Vanilla', 'Skys', 'Eds', 'Bronks'];

const removidos = nomes2.splice(4, 1);
console.log(nomes2, removidos);

const removidosN = nomes2.splice(-2, 1);
console.log(nomes2 ,removidosN);

const remov = nomes2.splice(3 , 2, 'Paulo', 'Otavio');
console.log(nomes2, remov);

console.log('-----------------concatenando arrays------------------')
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9, 'Dash']);
//or
const a3alt = [...a1, ...a2];
console.log(a3);
console.log(a3alt);


