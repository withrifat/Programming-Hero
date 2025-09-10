const getData = new Promise((resolve, reject) => {
    const nums = Math.random() * 10;
    const num = Math.round(nums);
    if(num > 5) {
        resolve({num:num})
    }else{
        reject({err: "data is not available"})
    }
});
getData
    .then(data=>console.log(data, "promise resolved"))
    .catch(error => console.log(error))