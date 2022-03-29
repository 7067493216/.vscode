const fs = require("fs"); //fs module
const path = require("path"); //path module
let types = {
    media: ["mp4", "mkv", "mp3","mov"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex',"csv",'json'],
    app: ['exe', 'dmg', 'pkg', "deb","apk"],
    images: ['png','jpg','jpeg']
}


function organize(srcPath) {
  //1. to check if srcPath is present
  if (srcPath == undefined) {
    //The process.cwd() method returns the current working directory of the Node.js process.
    //console.log(srcPath); //undefined
    srcPath = process.cwd();
     console.log("source path is ",srcPath);
  }
  let organizedFiles = path.join(srcPath, "organized_files");
  //console.log("organized files folder path is ", organizedFiles);
  if (fs.existsSync(organizedFiles) == false){
      fs.mkdirSync(organizedFiles);
  }
else console.log("file already exist");

let allFiles = fs.readdirSync(srcPath);
console.log(allFiles);
for(let i=0;i<allFiles.length;i++){
  //let ext = allFiles[i].split(".")[1];
  let ext = path.extname(allFiles[i]);
  console.log(ext);
}
}
 let srcPath = "\\Users\\Dell\\.vscode\\node\\fileOrganizer\\downloads"
organize(srcPath);
 





