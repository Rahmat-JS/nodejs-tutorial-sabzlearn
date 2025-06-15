let time = 10;

setInterval((t) => {
    console.log(`time is: ${time}`);
    time--;
    if(time == 0) ProcessingInstruction.exit()
}, 1000);
