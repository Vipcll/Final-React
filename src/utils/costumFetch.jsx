let value = true;


const costumFetch = (time, task) => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
            if (value) {
            resolve(task)
            } else {
            reject(console.error("error costum Fetch"))
            }   
        }, time);
    });
}

export default costumFetch;