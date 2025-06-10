const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query) => {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
};

const employees = [
    {
        id: 1,
        name: 'ali',
        tasks: []
    },
    {
        id: 2,
        name: 'hossein',
        tasks: []
    },
    {
        id: 3,
        name: 'reza',
        tasks: []
    },
    {
        id: 4,
        name: 'zahra',
        tasks: []
    }
];

async function main() {
    try {
        while(true) {
            const name = await askQuestion('Enter your employee name: ');
            const idx = employees.findIndex((employee) => {
                return employee.name === name;
            });
            if(idx === -1) {
                console.log('this employee does not exist!');
                continue;
            }
            const task = await askQuestion('Enter your task: ');
            employees[idx].tasks.push(task);

            console.log(`your current employees status is:\n${JSON.stringify(employees, null, 2)}`);
            

            const choice = await askQuestion('do you want to continue (y/n)? ');
            const yes = ['yes', 'y'];
            if(!yes.includes(choice.toLowerCase())) break;
        }
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

main();