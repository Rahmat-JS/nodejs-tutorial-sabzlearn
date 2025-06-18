const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching data completed!');
            resolve({id: 1, message: 'fetching data completed succussfully!'});
        }, 2000);
    });
};

const parseData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const parsedData = `data parsed succussfully => id: ${data.id}, message: ${data.message}`;
            console.log(parsedData);
            resolve({parsed: parsedData});
        }, 2000);
    });
};

const showData = (response) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(response.parsed);
            resolve(response);
        }, 2000);
    });
};

fetchData().then(parseData).then(showData);