let fs=require("fs");
let zlib=require("zlib");//zlib is used to compress the file
//compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream( 'input.txt.gz'))
console.log("file compressed!!!!");
//decompress the file
fs.createReadStream('input.txt.gz')
.pipe(zlib.createUnzip())
.pipe(fs.createWriteStream('input.txt'))
console.log("file decompressed!!!!");