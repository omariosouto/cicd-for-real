const { execSync } = require('child_process');
console.log('Build me up!!!!')

console.log(
    'Resultado]',
    execSync('ls -la && cd ../ && ls -la').toString()
);
