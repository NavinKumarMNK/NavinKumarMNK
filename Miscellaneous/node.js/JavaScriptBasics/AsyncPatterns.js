const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
        }, 1500);
}

setTimeout(() => {
    console.log("Hello World");
    fetchData(text => {
        console.log(text);
    })
}, 2000);

console.log("Mega");
console.log("Hi");
