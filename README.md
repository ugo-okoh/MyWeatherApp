# MyWeatherApp
A simple weather app using React Native and Axios as seen in the video below. [Metaweather](metaweather.com/api/) was used as the API to get the weather information.


https://user-images.githubusercontent.com/74827204/144574320-1af0a29e-bfcb-4264-b053-7f7a6b71a9de.mp4


## DBNc Interview Questions
Question 1.)
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
