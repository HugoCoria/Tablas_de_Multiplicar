import { crearArchivo } from './helpers/multiplicar.js';
import { argv } from './config/yargs.js';

console.clear();
console.log( argv );

/* console.log('====================');
console.log(' Tabla del: 5');
console.log('====================');

const base = 5;
let salida = '';

for(let i = 1; i <=10; i++) {
salida += `${ base } x ${i} = ${ base * i }\n`;
}

console.log(salida); */

/* fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
if (err) throw err;
console.log(`tabla-${ base }.txt creado`);
}) */

/* fs.writeFileSync( `tabla-${ base }.txt`, salida );
console.log(`tabla-${ base }.txt creado`); */

// const base = 3;

/* const [,, arg3 = 'base=5' ] = process.argv;
const [, base = 5 ] = arg3.split('=');
 */

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creada') )
    .catch(err => console.log(err) );