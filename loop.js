/*
    ! Loops  :
    * Most of the activities we do  in life full of repetitons. Imagine İf I ask you to print out from 0 to 100 using console.log().
    * To implement this simple task it may take you 2 to 5 minutes, such kind of tedious and repetitive task can be carried out using loop.
    * If you prefer watching the videos, you can checkout the videos tutorials.
    * In programming languages to carry out repetitive task we use different kinds of loops. The following examples are the commonly used loops
    * in JavaScript and other programming languges
*/
/*
     ! for loop structure
    for(initialization,condition, increment/decrement){
        * code goes here
    }
*/

    for(let i=0;i<=5;i++){
        console.log(i);
    }
    console.log("----------------------------------------")

    for(let i=5;i>=0;i--){
        console.log(i);
    }
    console.log("----------------------------------------")

    for(let i=0;i<=5;i++){
        console.log(`${i} * ${i} =${i*i}`);
    }

    console.log("----------------------------------------")

    const countries=['Finland','Sweden','Denmark','Norway','Iceland'];
    const newarr=[];
    for(let i=0;i<countries.length;i++){
        newarr.push(countries[i].toUpperCase());
    }
    console.log(newarr);

    console.log("----------------------------------------")

    // * Adding all elements in the array
    const number=[1,2,3,4,5];
    let sum=0;
    for(let i=0;i<number.length;i++){
        sum=sum+number[i]; // can be shorten, sum += numbers[i]
    }
    console.log(sum); // 15

    console.log("----------------------------------------")

    // * Creating a new array based on the existing array

    const numbers=[1,2,3,4,5];
    const newArr=[];
    let sums=0;
    for(let i=0;i<numbers.length;i++){
        newArr.push(numbers[i] ** 2);
    }
    console.log(newArr);

    console.log("----------------------------------------");

    const country=['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
    const yeniArr=[];
    for(let i=0;i<country.length;i++){
        yeniArr.push(country[i].toUpperCase());
    }
    console.log(yeniArr);


    console.log("----------------------------------------");

    // * while loop

    let i=0;
    while(i<=5){
        console.log(i);
        i++;
    }

    console.log("----------------------------------------");

    // * do while loop

    let i1=0;
    do{
        console.log(i1);
        i1++;
    }while(i1<=5);

    console.log("----------------------------------------");
    /*
        * foor of loop
    * we use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.
    for (const element of array){
        code goes here
    }
    */

    const sayilar=[1,2,3,4,5];

    for(const sayi of sayilar){
        console.log(sayi);
    }

    console.log("----------------------------------------");

    for(const sayi of sayilar){
        console.log(sayi*sayi);
    }

    console.log("----------------------------------------");

    // * adding all the numbers in the array
    let toplam=0;
    for(const sayi of sayilar){
        toplam=toplam+sayi;
    }
    console.log(toplam);

    console.log("----------------------------------------");

    const webTechs=['html','css','js','react','redux','node','mongodb'];
    for(const tech of webTechs){
        console.log(tech.toUpperCase());
    }

    console.log("----------------------------------------");

    for(const tech of webTechs){
        console.log(tech[0]);  // get only the first letter of each element,  H C J R N M
    }

    console.log("----------------------------------------");

    const ulkeler=['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
    const yeniDizi=[];
    for(const ulke of ulkeler){
        yeniDizi.push(ulke.toUpperCase());
    }
    console.log(yeniDizi);

    console.log("----------------------------------------");

    // * break 

    // * break is used to interrupt a loop
    for(let i=0;i<=5;i++){
        if(i==3){
            break;
        }
        console.log(i);
    }
    //* The above code stops if 3 found in the iteration process.


    console.log("----------------------------------------");

    // * continue
    // * we use the keyword continue to skip a certain iterations.
    for(let i=0;i<=5;i++){
        if(i==3){
            continue;
        }
        console.log(i);
    }
   