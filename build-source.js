const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './js/tab.js',
        './js/datepicker.js',
        './js/flight.js',
    ];
    const filescss = [
        './css/style.css'
    ];
    await fs.ensureDir('dist');
    await concat(files, 'dist/app.js');
    await concat(filescss, 'dist/style.css');
})();