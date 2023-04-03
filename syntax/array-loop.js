var number = [1, 400, 12, 34]
var i = 0;
var sum = 0;
while (i < number.length) {
    console.log(number[i]);
    sum+=number[i]
    i += 1;
}
console.log(`total : ${sum}`);