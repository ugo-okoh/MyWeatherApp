# MyWeatherApp
A simple weather app using React Native and Axios as seen in the video below. [Metaweather](https://www.metaweather.com/api/) was used as the API to get the weather information.


https://user-images.githubusercontent.com/74827204/144574320-1af0a29e-bfcb-4264-b053-7f7a6b71a9de.mp4


## DBNc Interview Questions
Question 1.)
Write a react function that takes the following input:
rooms = [
    { room_type: "Queen", vacant_rooms: 5, price: 100 },
    { room_type: "Double", vacant_rooms: 3, price: 75 },
    { room_type: "Twin", vacant_rooms: 8, price: 60 }
  ];
And produces the following output:
```<ol><li>Queen, 5, $100</li><li>Double, 3, $75</li><li>Twin, 8, $60</li></ol>```


**Answer ->**
```
//index.js
import React from 'react';

const index = ({ rooms }) => {
    if (!rooms) return <></>
    return (
        <ol>
            {rooms.map((value, index) => {
                const { room_type, vacant_rooms, price } = value;
                return (
                    <li key={index}>
                        {`${room_type}, ${vacant_rooms}, ${price}`}
                    </li>
                );
            })}
        </ol>
    )
}
export default index;
``` 


Question 2.)
Write a function in Javascript, which receives NUMBER and has the next logic:
a) it prints "foo" if NUMBER is divisible by 2;
b) it prints "bar" if NUMBER is divisible by 7;
c) it prints "foobar" if NUMBER is divisible by 14;
d) it prints NUMBER value for other cases;
note: NUMBER is a positive integer number;


**Answer->**
```
//index.js
function index(NUMBER) {
    if (NUMBER % 2 === 0) console.log("foo");
    else if (NUMBER % 7 === 0) console.log("bar");
    else if (NUMBER % 14 === 0) console.log("foobar");
    else console.log(NUMBER)
}
``` 

Question 3.)
Let's say you have a file with a following structure:
"id,name,value
1,Dan,150
2,Peter,300
3,Mark,400
4,Victor,600"

Write a function in node.js that reads this file and returns the number, which is a sum of all "value" numbers from the file;


**Answer->**
```
//index.js
import fs from 'fs';
import { parse } from 'csv-parse';
const filename = './filename.csv';

fs.createReadStream(filename)
    .pipe(parse({ delimiter: ',' }))
    .on('data', function (rowItem) {
        const information = [...rowItem[0].split('\n')];
        information.shift();
        let total = 0;
        for (let i = 0; i < information.length; i++) {
            const index = getPosition(information[i], ',', 2);
            const length = information[i].length;
            const value = information[i].substring(index, length);
            const number = Number(value)
            total += number;
        }
        console.log('Total ->', total)
    });
function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length + 1;
}
``` 


Question 4.)
Refactor the code below.
(do not create functions or constants, code refactor is required only)
 
if (province == 'ONTARIO') {
   rate = ONTARIO_RATE;
   amt = base * ONTARIO_RATE;
   calc = 2 * basis(amt) + extra(amt) * 1.05;
} else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
   rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
   amt = base * rate;
   calc = 2 * basis(amt) + extra(amt) * 1.05;
   if (province == 'QUEBEC') {
       points = 2;
   }
} else {
   rate = 1;
   amt = base;
   calc = 2 * basis(amt) + extra(amt) * 1.05;
}


**Answer->**
```
if (province == 'ONTARIO') {
    amt = base * ONTARIO_RATE;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
}
else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
    rate = (province == 'QUEBEC') ?
        QUEBEC_RATE :
        ALBERTA_RATE;
    amt = base * rate;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
    if (province == 'QUEBEC')
        points = 2;
}
else {
    calc = 2 * basis(base) + extra(base) * 1.05;
}

```

Question 5.)
Write a small react or react native app that uses this weather api:
https://www.metaweather.com/api/ *
Your app should allow the user to search for a city and see that day's forecast.
Styling is not important, you can use default browser styles.


**Answer->**
```
This is the public Repo for question 5

```
![Simulator Screen Shot - iPhone 11 Pro Max - 2021-12-03 at 01 42 34](https://user-images.githubusercontent.com/74827204/144583042-78640eed-e7e0-4526-9b17-3840e2496cd5.png)

