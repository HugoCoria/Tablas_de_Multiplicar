import colors from 'colors';
import   yargs from 'yargs'; 
import   {   hideBin   }  from   'yargs/helpers'; 
const argv = yargs(hideBin(process.argv))
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: 'Muestra la tabla en consola'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    default: 10,
    describe: '¿Hasta que numero multiplico?'
})
.check((argv, options) => {
    if( isNaN(argv.b)){
        throw `${'Error: '.red }La base tiene que ser un número`
    }
    return true;
})
.argv;

export { argv };