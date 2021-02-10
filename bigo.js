// 1
// a) O(1) because it does not matter how many people are in the group 
// b) O(n) because if you ask everyone individually, it is one extra tick for 1 person

// 2
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// O(1) because only one value ever goes into it

// 3
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
// O(n^2) because of the 2 loops

// 4
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
// O(n) because every value only adds 1 extra tick as you go through each item individually

// 5
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
//O(n) because you're looking at each item in the array 1 by one

// 6
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " + arr[j]);
        }
    }
}
// O(n^2) because of the two loops adding more complexity

// 7
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
//this makes a fibbonacci sequence but to the nth number, and has O(n) complexity

// 8
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// 9
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
//O(n) as it only looks at 1 element

// 10
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
//O(log(n)), it is looking to test if the number is prime

//11

//12
function countingSheepIterative(numOfSheep) {
    while (numOfSheep > 0) {
        console.log(`${numOfSheep}: Another sheep jumps over the fence`);
        numOfSheep--;
    }
    console.log('All Sheep have jumped over the fence');
}
function powerCalculator(a, b) {
    if (b < 0) {
        return 'exponent should be >= 0';
    } else if (b === 0) {
        return 1;
    }

    let hold = a;

    for (let i = b; i >= 2; i--) {
        hold *= a;
    }

    return hold;
}
function reverseString(str) {
    if (str === '') {
        return '';
    }

    let strArray = str.split('');
    strArray.reverse();
    strArray = strArray.join('');

    return strArray;
}
function triangularNumber(number) {
    let answer = 0;
    while (number > 0) {
        answer += number;
        number--;
    }
    return answer;
}
function stringSplitter(str, split) {
    if (!str.includes(split)) {
        return str;
    }

    const answer = str.split(split);

    return answer;
}
function fibonacciNumber(n) {
    let sequence = [1, 1];

    for (let i = 2; i < n + 1; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1]);
    }
    return sequence;
}
function factorial(n) {
    let answer = 1;
    while (n > 1) {
        answer *= n;
        n--;
    }
    return answer;
}