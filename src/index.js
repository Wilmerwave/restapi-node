const app = require ('./app');
const port = process.env.PORT || 9000;
async function main(){
    await app.listen(3000);
    console.log('Server funcionando')
}

app.listen(port, () => console.log('server on port ', port))

main();
