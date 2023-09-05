let countriesCopy=[];
for(const country of countries){
    countriesCopy.push(country);
} // copied without mutation

// 2: sort the copied Array
let sortedCountries=countriesCopy.sort();
console.log(sortedCountries);

// 3
let sortedWebTechs=webTechs.sorted();
let mernStack=['MongoDb','Express','Redux','Nodejs'];
let sortedMernStack=mernStack.sorted();

let landCountries = [];
for(const country of countries) {
   if(country.includes('land')) {
      landCountries.push(country);
   }
} console.log(landCountries);

// 5 
let maxLength = 0;
let maxLenCountry;
for (const country of countries) {
   if(country.length > maxLength) {
      maxLength = country.length;
      maxLenCountry = country;
   }
} console.log(maxLenCountry); // central african republic

// 6: same as 4 
// 7    
let lenFourCountries = [];
for (const country of countries) {
   if(country.length === 4) 
      lenFourCountries.push(country);
} console.log(lenFourCountries);

// 8 
let twoWordCountries = [];
for(const country of countries) {
   if(country.split(' ').length > 1) 
      twoWordCountries.push(country);
} console.log(twoWordCountries);

// 9 
let reversedCountries = countries.reverse();
let capReverseCountries = [];

for(const country of reversedCountries) {
   capReverseCountries.push(country.toUpperCase());   
} console.log(capReverseCountries);