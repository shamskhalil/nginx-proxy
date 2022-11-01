const express = require('express');
const app = express();
let { PORT } = process.env || 3000;
if (!PORT) {
    PORT = 3000;
}

const serverid = getId(8);

app.use((req, res, next) => {
    res.setHeader("x-serverid", serverid);
    next();
});

app.use(express.static(__dirname + '/www'));

app.listen(PORT, () => {
    console.log(`server listeninng on port ${PORT}`);
})








function getId(len) {
    const store = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let ret = '';
    for (let i = 0; i < len; i++) {
        const pos = Math.ceil(Math.random() * store.length);
        ret += store[pos];
    }
    return ret;
}