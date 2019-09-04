const {src, dest, parallel } = require('gulp');

function openCal() {
    return src(['node_modules/@fullcalendar/**/*'])
    .pipe(dest('views/opencalendar'));
}

function bootStrap()  {
    return src(['node_modules/bootstrap/dist/css/bootstrap.min.css','node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(dest('views/bootstrap'));
}


function jQuery()  {
    return src(['node_modules/jquery/dist/jquery.min.js'])
    .pipe(dest('views/jquery'))
}


exports.openCal = openCal;
exports.bootStrap = bootStrap;
exports.jQuery = jQuery;
