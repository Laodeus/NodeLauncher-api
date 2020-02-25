import childProcess from "child_process";
import fs from "fs";

const mainRoute = (req,res,next)=>{
    
    let regexp = /(_)/g;
    let args = req.params.args? req.params.args.replace(regexp,"/"):'./';
    console.log(args);
    
    let files = fs.readdirSync(args);

    console.log(files);
    res.send(files);
}


const procLauncher = (req, res, next) => {
    
    let regexp = /(_)/g;
    let procToLaunch = req.params.proc.replace(regexp,"/");

    
    let args = req.params.args? req.params.args.split(' '):[];
    
    let fileIndex = args.findIndex((elem)=>{return elem == '-o'});
    let file = args[fileIndex+1];


    try {
        const proc = childProcess.fork(`./${procToLaunch}`,args);

        proc.on('close',(data)=>{
            res.send(`Data Generated.\n\n ${procToLaunch} close status : ${data}`);
            console.log(`close =>${data}`);
        });
        
        proc.on('error',(data)=>{
            console.log(`error => ${data}`);
        });

    } catch (err) {
        console.log(`error => ${err}`)
    }
}

export default {mainRoute,procLauncher};