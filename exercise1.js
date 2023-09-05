/*
    ! EXERCISE LEVEL 1 : 

*/
const countries31=['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];
const webTechs=['html','css','js','react','redux','node','mongodb'];
const mernStack31=['mongodb','express','react','node'];
/*
    TODO 1 : Iterate 0 to 10 using for loop, do the same using while and do while loop
*/
    for(let i=1;i<=10;i++){
        // console.log(i);
    }
    console.log("-----------------------------------"); 
    let i1=0;
    while(i1<=10){
         // console.log(i1);
        i1++;
    }
    console.log("-----------------------------------"); 
    let i2=0;
    do{
        // console.log(i2);
        i2++;
    }while(i2<=10);

/*
    TODO 2: Iterate 10 to 0 using for loop, do the same using while and do while loop
*/
    for(let i=10;i>=0;i--){
        //  console.log(i);
    }
    console.log("-----------------------------------"); 
    let i3=10;
    while(i3>=0){
      //  console.log(i3);
        i3--;
    }
    console.log("-----------------------------------"); 
    let i4=10;
    do{
         // console.log(i4);
        i4--;
    }while(i4>=0);

/*
    TODO 3 : Iterate 0 to n using for loop
*/  
    let n=3;
    for(let i=0;i<=n;i++){
        //console.log(i);
    }

/*
    TODO 4: Write a loop that makes the following pattern using console.log():
*/
    for(let i=0;i<=7;i++){
        if(i>0){
            console.log("#".repeat(i));
        }
    }
    console.log("-----------------------------------"); 
/*
    TODO 5: USE LOOP TO PRINT THE FOLLOWING PATTERN : 
*/
    const numbers=[0,1,2,3,4,5,6,7,8,9,10];
    for (const number of numbers){
        console.log(`${number} * ${number} = ${number * number}`);
    }
    
    console.log("-----------------------------------"); 

/*
    TODO 6 : USING LOOP PRINT THE FOLLOWING PATTERN
*/
    for(const power of numbers){
        console.log(`${power} = ${power**2}  = ${power**3}`);
    }

    console.log("-----------------------------------"); 

/*
    TODO 7 : Use for loop to iterate from 0 to 100 and print only even numbers
*/
    for(let i=0;i<=100;i=i+2){
      //  console.log(i);
    }

    console.log("-----------------------------------");

/*
    TODO 8: Use for loop to iterate from 0 to 100 and print only odd numbers
*/
    for(let i=1;i<=100;i=i+2){
      //  console.log(i);
    }

    console.log("-----------------------------------");
/*
    TODO 9 : Use for loop to iterate from 0 to 100 and print only prime numbers.
*/
    console.log("GEÇ");

/*
    TODO 10 : use for loop to iterate from 0 to 100 and print the sum of all numbers.
*/  
    let sum=0;
    for(let i=0;i<101;i++){
        sum+=i;
    } 
    console.log("Sum of 0-100: ",sum);

/*
    TODO 11: Use for loop to iterate from 0 to 100 and print the sum of all evens and te sum of all odds.
*/
let sumOdd=0;
let sumEven=0;
for(let i=0;i<101;i++){
    if(i%2==0){
        sumEven+=i;
    }else{
        sumOdd+=i;
    }
}
console.log("Sum Odd" , sumOdd);
console.log("Sum Even" , sumEven);

/*
  TODO 12: Use foor loop tto iterate from 0 to 100 and print the sum of all evens and the sum of all odds. print sum of evens and sum of odds as array.
*/
console.log([sumEven, sumOdd]);

/*
TODO 13: DEVELOP A SMAL SCRİPT WHİCH GENERATE ARRAY OF 5 RANDOM NUMBERS
*/
const scriptArr=[];
for(let i=0;i<=5;i++){
    scriptArr.push(parseInt(Math.PI*Math.random()*100+3));
}
console.log(scriptArr);

/*
TODO 14: Develop A small script which generate array of 5 random numbers and the numbers must be unique.
*/
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
   let randNum = parseInt(Math.PI * Math.random() * 100 + i)     
   if(randomNumbers.indexOf(randNum) == -1) {
      randomNumbers.push(randNum);
   }
}
console.log(randomNumbers);


/*
 TODO 15 : Develop a small script which generate a six characters random id : 
*/
let alphabets='abcdefghijklmnopqrstuvwxyz';
let randoms=[];
for(let i =0;i<6;i++){
    if(i%2==0) randoms.push(i);
    else randoms.push(alphabets[parseInt(Math.random()*25)])
}
 // console.log(randoms.join(''));

/*  ! EXERCİSE 2  */

/*
    TODO 1: Develop a small script which generate any number of characters random id:
*/
    let alphanums='123456789abcdefghijklmnopqrstuvwxyz123456789';
    let n1=parseInt(Math.random()*alphanums.length)%16;
    let rands1=[];
    for(let i=0;i<=n1;i++){
        rands1.push(alphanums[Math.floor(Math.random()*alphanums.length)-1]);
    }
    console.log(rands1.join(""));

/*
    TODO 2: Write a script which generates a random hexadecimal number.
*/
    let allHexCodes = '123456789abcdef';
    let hexCars=[];
    for(let i=0;i<6;i++){
        hexCars.push(allHexCodes[parseInt(Math.random()*allHexCodes.length)-1]);
    }
    console.log('#'+hexCars.join(''));


/*
    TODO 3: write script which generates a random rgb color color number.
*/
        let rgb = [];
        for(const char of '123') {
        var red = (parseInt(Math.random() * 255));
        var grn = (parseInt(Math.random() * 255));
        var blu = (parseInt(Math.random() * 255));
        
        rgb.push(red, grn, blu);
        } console.log(`rgb(${red}, ${grn}, ${blu})`);

/*
        TODO 4 : Using the above countries array, create the following new array.
*/
        const countri=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
        let capCountries=[];
        for(const country of countri){
            capCountries.push(country.toUpperCase());
        }console.log(capCountries);
/*
    TODO 5: Using the above countries array, create an array for countries length'.
    const sayis=[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5];
        let countryNameLens = [];
            for(const country of countries) {
            countryNameLens.push(country.length);
            } //console.log(countryNameLens); */
    
/*
   TODO 6 : Use the countries array to create the following array of arrays:


let countries=  [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ]
let countryData = [];
for(const country of countries) {
   let len = country.length;
   let first3Chars = country.slice(0, 3).toUpperCase();
   countryData.push([country, first3Chars, len]);
} 
for (const arr of countryData) {
   console.log(arr);
}

*/


// 7 
let noCountry = true;
let landCountriesList = [];

for(const i of countries) {
   if(i.includes('land')) {
      landCountriesList.push(i);
      noCountry = false;
   }
} 
if(noCountry) {
   console.log("All these countries are without land");
} else {
   for(const country of landCountriesList) 
      console.log(country);
}

// 8  
let endsWith_ia = [];
for (const country of countries) {
   if(country.endsWith('ia'))
      endsWith_ia.push(country);
}
if(endsWith_ia.length > 0) {
   for(const each of endsWith_ia) 
      console.log(each);
}

// 9
let maxLength = 0;
let maxLenCountry;
for (const country of countries) {
   if(country.length > maxLength) {
      maxLength = country.length;
      maxLenCountry = country;
   }
} console.log(maxLenCountry);

// 10
let lenFiveCountries = [];
for (const country of countries) {
   if (country.length === 5)
      lenFiveCountries.push(country);
}
console.log(lenFiveCountries);

// 11 
let length = webTechs[0].length;
let word;
for(const tech of webTechs) {
   if (tech.length > length) {
      word = tech;    
      length = tech.length;
   }
} console.log(word);

// 12   
let techWithLen = [];
for (const tech of webTechs) {
   let len = tech.length;
   let caps = tech.toUpperCase();
   
   techWithLen.push([caps, len])
};
console.log(techWithLen);

// 13: create the MERN stack 
let mernArray = ['MongoDB', 'Express', 'React', 'Node'];
let mernStack = [];

for (const tech of mernArray) {
   mernStack.push(tech[0]);
}; console.log(mernStack.join(''));

// 14 
for(const tech of webTechs) {
   console.log(tech);
}

// 15 
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let reversedFruits = [];

for (let i = fruits.length-1; i >= 0; i--) {
   reversedFruits.push(fruits[i]);
} console.log(reversedFruits);

// 16 print the webTechs 
for (const each of webTechs) {
   console.log(each);
}
