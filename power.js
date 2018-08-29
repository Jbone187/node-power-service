const shell = require('node-powershell');

let question = 'What is the Name of the Service';

process.stdout.write(`${question}: `); 
//Data Entree Point
process.stdin.on('data', function(data){  
  let answer = data.toString().trim();

if(answer){
  
let ps = new shell({
  executionPolicy: 'Bypass',
  noProfile: true
});

ps.addCommand(`H:/coding/node/checksrv.ps1 ${answer}`);

ps.invoke()
.then(output => {
  console.log(output);
})
.catch(err => {
  console.log(err);
  ps.dispose();
});

}else{

let question = 'Please add Service Name';

process.stdout.write(`${question}: `); 

};

});
