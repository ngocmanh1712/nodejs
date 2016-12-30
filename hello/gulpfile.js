var gulp = require("gulp");
var browserSync = require("browser-sync");
var reload = browserSync.reload;

gulp.task('default', function () {
    console.log("123");
});

gulp.task('server',[], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: "."
        }  
    });
    gulp.watch(['*.html'], reload);
});
