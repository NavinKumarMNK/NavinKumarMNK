const names = ["MNK", "Mega"];
console.log(names.map(
    (name) => {
        return "Hello " + name;
    }
));

names.forEach(element => {
    console.log(element);
});