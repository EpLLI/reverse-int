module.exports = function reverse (n) {
    let z=String(n).split("").reverse().join("");
    z=z.replace('-','');
    return (z);

}
