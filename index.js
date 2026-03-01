import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
.prompt([{
    message:"Write your URL:",
    name:"URL",
},
])
.then((answer)=>{
    const url = answer.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
   fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
 .catch((error) => {
    if (error.isTtyError) {
      console.log("Error: Prompt couldn't be rendered in the current environment.");
    } else {
   
      console.log("Something went wrong: ", error.message);
    }
  });