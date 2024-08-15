module.exports = function toReadable (number) {
    numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',


    }

    ten = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }


    str = '';
    if (number == 0){
        return numbers[0];
    }
    if (Math.floor(number / 100) > 0){
        console.log(numbers[Math.floor(number / 100)]);
        str += numbers[Math.floor(number / 100)] + ' hundred ';
    }
    number = number % 100;
    if (Math.floor(number / 10) > 1){
        str += ten[Math.floor(number / 10)] + ' ';
    }
    if (Math.floor(number / 10) == 1){
        str += numbers[number];
        return str.trim();
    }
    number = number % 10;
    if (number > 0){
        str += numbers[number];
    }
    return str.trim(0);
}

console.log(module.exports(2));