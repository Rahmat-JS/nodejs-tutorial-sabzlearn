const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(nums.sort((a, b) => Math.round(Math.random()) ? -1 : +1));
