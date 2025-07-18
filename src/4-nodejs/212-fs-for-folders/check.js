const fs = require('fs');
const path = require('path');

const target = './js-class';

const give_info = async (curr_path, indent = 0) => {
    
    // check type of path
    let type = '';
    const stat = fs.statSync(curr_path);
    if(stat.isFile()) type = 'file';
    else if(stat.isDirectory()) type = 'directory';
    else type = 'unknown';

    // recursive read directory
    console.log(`${"--".repeat(indent)}${path.basename(curr_path)} (${type})`);
    if(type === 'directory') {
        const data = fs.readdirSync(curr_path);
        data.forEach(async recursive_path => {
            await give_info(path.join(curr_path, recursive_path), indent + 1);
        });
        if(data.length === 0) console.log(`${"--".repeat(indent + 1)}EMPTY...`);
    }
};

give_info(target);