config = {
    timeOut : 25,
    waitTime: 24
}


for( let x in config)
   console.log(x,config[x]);

for (let x of Object.keys(config))
     console.log(x, config[x]) ;  

console.log(config.timeOut);


export {config};