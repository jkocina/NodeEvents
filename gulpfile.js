const {src, dest, parallel } = require('gulp');

function fullCal() {
    return src(['node_modules/@fullcalendar/**/*'])
    .pipe(dest('views/fullcalendar'));
}

function bootStrap()  {
    return src(['node_modules/bootstrap/dist/css/bootstrap.min.css','node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(dest('views/bootstrap'));
}


function jQuery()  {
    return src(['node_modules/jquery/dist/jquery.min.js'])
    .pipe(dest('views/jquery'))
}


exports.fullCal = fullCal;
exports.bootStrap = bootStrap;
exports.jQuery = jQuery;
