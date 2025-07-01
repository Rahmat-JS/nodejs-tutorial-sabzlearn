const num = 12;

const isLogin = (username) => {
    if(username.toLowerCase() === 'rahmat') return true;
    return false;
};

module.exports = {
    num,
    isLogin
};