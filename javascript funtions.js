// Exercise 1: Print Odds
function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
    }   }
}

printOdds(10); //1,3,5,7,9
printOdds(100); //1,3, 5-99

// Exercise 2: Check Age
function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}! You can drive!`;
    let belowSixteen = `Sorry ${userName}, you need to wait until you're 16.`;

    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);

    }
}


// Exercise 3: Which Quadrant
function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x == 0 && y != 0) {
        return "y Axis";
    }else{
        return "Origin";
    }


}

console.log(checkQuadrant(11, 1));
console.log(checkQuadrant(-11, 1));
console.log(checkQuadrant(-1, -11)); 
console.log(checkQuadrant(1, -11));
console.log(checkQuadrant(0, -11)); 
console.log(checkQuadrant(11, 0)); 
console.log(checkQuadrant(0, 0)); 

// Exercise 4: Triangles
function isValidTriangle(a, b, c) {
 return a + b > c && a + c > b && b + c > a 
    
}

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral triangle`;
     } else if (a == b || a == c || b == c) {
        return `Isosceles`;
        } else {
        return `Scalene`;
    }
    } else {
        return `Not a valid triangle`;
    }

}

console.log(checkTriangle(2, 3, 4)); // scalene
console.log(checkTriangle(2, 2, 2)); // equilateral
console.log(checkTriangle(1, 2, 2)); // isosceles
console.log(checkTriangle(1, 1, 2)); // invalid

//Excercise 5: Data Usage
// planLimit
/*
15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.
*/
function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "UNDER";
    } else {
        statusMsg = "AT";
    }
    
    

       console.log(`${day} day(s) used, ${remainingDays} day(s) remaining
    Average projected use: ${projectedAvg.toFixed(2)} GB/day.
    You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day),
    continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)
    } GB from your data limit.
    To stay below your data plan, use no more than ${(remainingData / remainingDays).toFixed(2)} GB/day.`);
    
    }

    dataUsageFeedback(50, 12, 25);

