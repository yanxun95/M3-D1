/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const ex1 = function (x, y) {
    if (x === y) {
        return (x + y) * 3;
    } else {
        return x + y;
    }
};

console.log("Ex1(3 + 3):", ex1(3, 3));
console.log("Ex1(2 + 1):", ex1(2, 1));

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const ex2 = function (x, y) {
    let checkNum = 50;
    if (x === checkNum || y === checkNum) {
        return true;
    } else if (x + y === checkNum) {
        return true;
    } else {
        return false;
    }
};

console.log("\nEx2(50 + 3):", ex2(50, 3));
console.log("Ex2(25 + 25):", ex2(25, 25));
console.log("Ex2(2 + 1):", ex2(2, 1));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const ex3 = function (str) {
    return str.slice(1);
};

console.log("\nEx3(string: remove the first charater):", ex3("string"));

/*

4)
 Create a function to find the largest of three given integers.
*/

const ex4 = function (x, y, z) {
    return Math.max(x, y, z);
};

console.log("\nEx4(1,2,3):", ex4(1, 2, 3));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const ex5 = function (x, y) {
    numArr = [x, y];
    let answer = true;
    for (let i = 0; i < numArr.length; i++) {
        if (
            (numArr[i] >= 40 && numArr[i] <= 60) ||
            (numArr[i] >= 70 && numArr[i] <= 100)
        ) {
            answer;
        } else {
            answer = false;
            break;
        }
    }
    return answer;
};

console.log("\nEx5(50, 80):", ex5(50, 80));
console.log("Ex5(30, 80):", ex5(30, 80));
console.log("Ex5(50, 30):", ex5(50, 30));

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

const ex6 = function (str, x) {
    let answer = "";
    for (let i = 0; i < x; i++) {
        answer += str + " ";
    }
    return answer;
};

console.log("\nEx6(String with 3 times):", ex6("String", 3));

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const ex7 = function (str) {
    let x = str.slice(0, 3);
    if (x === "New" || x === "Los") {
        return str;
    } else {
        return "";
    }
};

console.log("\nEx7(New York):", ex7("New York"));
console.log("Ex7(Los Angeles):", ex7("Los Angeles"));
console.log("Ex7(Ireland):", ex7("Ireland"));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const ex8 = function (arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    return answer;
};

let ex8Arr = [1, 2, 3];
console.log("\nEx8(array of [1,2,3]):", ex8(ex8Arr));

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const ex9 = function (arr) {
    let answer = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 || arr[i] === 3) {
            answer = true;
            break;
        } else {
            return false;
        }
    }
    return answer;
};

let ex9Arr = [1, 2];
let ex9Arr1 = [2, 3];
let ex9Arr2 = [3, 1];
console.log("\nEx9(array of [1,2]):", ex9(ex9Arr));
console.log("Ex9(array of [2,3]):", ex9(ex9Arr1));
console.log("Ex9(array of [3,1]):", ex9(ex9Arr2));

/*
10) Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

const ex10 = function (arr) {
    let answer = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 || arr[i] === 3) {
            answer = true;
        } else {
            answer;
        }
    }
    return answer;
};

let ex10Arr = [1, 2];
let ex10Arr1 = [2, 3];
let ex10Arr2 = [3, 1];
let ex10Arr3 = [2, 5];
console.log("\nEx10(array of [1,2] contain 1 or 3):", ex10(ex10Arr));
console.log("Ex10(array of [2,3] contain 1 or 3):", ex10(ex10Arr1));
console.log("Ex10(array of [3,1] contain 1 or 3):", ex10(ex10Arr2));
console.log("Ex10(array of [2,5] contain 1 or 3):", ex10(ex10Arr3));

/*
11) Create a function to find the longest string from a given array of strings.
*/

const ex11 = function (arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
};

let ex11Arr = ["a", "ab", "abc"];
console.log("\nEx11(a, ab, abc):", ex11(ex11Arr));

/*
12) Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/

const ex12Obj = {
    "Acute angle": "An angle between 0 and 90 degrees.",
    "Right angle": "An 90 degree angle.",
    "btuse angle": "An angle between 90 and 180 degrees.",
    "Straight angle": "A 180 degree angle."
};

console.log("\nEx12(Acute angle):", ex12Obj["Acute angle"]);
console.log("Ex12(Right angle):", ex12Obj["Right angle"]);

/*
13)Create a function to find the index of the greatest element of a given array of integers
*/

const ex13 = function (arr) {
    let greatest = 0;
    let greatestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > greatest) {
            greatest = arr[i];
            greatestIndex = i;
        }
    }
    return greatestIndex
};

let ex13Arr = [1, 2, 3]
let ex13Arr1 = [1, 5, 3]
console.log("\nEx13(1, 2, 3), the greatest element of index is:", ex13(ex13Arr));
console.log("Ex13(1, 5, 3), the greatest element of index is:", ex13(ex13Arr1));

/*
14)Create a function to get the largest even number from an array of integers.*/

const ex14 = function (arr) {
    let evenArr = [];
    console.log(evenArr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenArr.push(arr[i])
        }
    }

    let largest = 0;
    for (let i = 0; i < evenArr.length; i++) {
        if (evenArr[i] > largest) {
            largest = evenArr[i];
        }
    }

    return largest;
}

let ex14Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("\nEx14(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), the largest even number is:", ex14(ex14Arr));

/*
16)Create a function to check from two given integers, whether one is positive and another one is negative.*/

const ex16 = function (x, y) {
    let arr = [x, y]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log("\nEx16:", arr[i], "is possitive")
        } else {
            console.log("Ex16:", arr[i], "is negative")
        }
    }
}

ex16(5, -7);

/*
17) Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. */

const ex17 = function (str) {
    let upper = "";
    if (str.length < 3) {
        upper = str.toUpperCase();
    } else {
        upper = str.slice(0, 3) + str.slice(3, str.length).toUpperCase()
    }
    return upper;
}

console.log("\nEx17(string):", ex17("string"));
console.log("Ex17(ab):", ex17("ab"));

/*
18)Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*/

const ex18 = function (x, y) {
    let answer = x + y;
    if (answer >= 50 && answer <= 80) {
        return 65;
    } else {
        return 80;
    }
}

console.log("\nEx18(25 + 30):", ex18(25, 30));
console.log("Ex18(50 + 50):", ex18(50, 50));

/*
19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".*/

const ex19 = function (num) {
    let answer = "";
    if (num % 3 == 0) {
        answer += "Diego"
    } if (num % 5 == 0) {
        answer += "Riccardo"
    }
    if (num % 7 == 0) {
        answer += "Stefano"
    }
    if (answer == "") {
        return num;
    }
    return answer;
}

console.log("\nEx19(28):", ex19(28));
console.log("Ex19(30):", ex19(30));
console.log("Ex19(6):", ex19(6));
console.log("Ex19(34):", ex19(34));

/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/

const ex20 = function (str) {
    let arr = str.split(" ");
    let acronym = "";
    for (let i = 0; i < arr.length; i++) {
        acronym += arr[i].slice(0, 1);
    }
    return acronym.toUpperCase();
}

console.log("\nEx20(British Broadcasting Corporation):", ex20("British Broadcasting Corporation"));
console.log("Ex20(british broadcasting corporation):", ex20("british broadcasting corporation"));