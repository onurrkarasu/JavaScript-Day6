/*
    ! loops :
    * Most of the activities we do in life are full of repetitions. Imagine If Ask you to print out from 0 to 100 using console.log().
    * To implements this simple task it may take you 2 to 5 minutes, such kind of tedious and repetitive task can be carried out using loop.
    * If you prefer watching the videos, you cank checkout the video tutorials
    * 
    * In programming languages to carry out repetitive task we use different kinds of loops. The following examples are the commonly used loops
    * in JavaScript and other programming languages.
*/

    // * for loop structure
    /*
        for (initialization, condition, increment/decrement){
            codes goes here
        }
    */

        for(let i=0;i<=5;i++){
            console.log(i);
        }

        console.log("-----------------------------------"); 

        for(let i=5;i>=0;i--){
            console.log(i);
        }

        console.log("-----------------------------------"); 

        for(let i=0;i<=5;i++){
            console.log(`${i} * ${i} = ${i * i}`);
        }

        console.log("-----------------------------------"); 

        const countries=['Finland','Sweeden','Denmark','Norway','Iceland'];
        const newArr=[];
        for(let i=0;i<countries.length;i++){
            newArr.push(countries[i].toUpperCase());
        }
        console.log(newArr);

        console.log("-----------------------------------"); 

        // * Adding all elements in the array
        const numbers=[1,2,3,4,5];
        let sum=0;
        for(let i=0;i<numbers.length;i++){
            sum=sum+numbers[i]; // can be shorten, sum += numbers[i]
        }
        console.log(sum);

        console.log("-----------------------------------"); 

        // * creating a new array based on the existing array

        const number=[1,2,3,4,5];
        const newArr2=[];
        let sums=0;
        for(let i=0;i<number.length;i++){
            newArr2.push(number[i]**2);
        }
        console.log(newArr2);

        console.log("-----------------------------------"); 

        const ulke=['Finland','Sweden','Malta','Italy'];
        const yeniArr=[];
        for(let i=0;i<ulke.length;i++){
             yeniArr.push(ulke[i].toUpperCase());
        }
        console.log(yeniArr);

        console.log("-----------------------------------"); 

        // * while loop
        let i=0;
        while(i<=5){
            console.log(i);
            i++;
        }

        console.log("-----------------------------------"); 

        // * do while loop
        let i1=0;
        do{
            console.log(i1);
            i1++;
        }while(i1<=5);

        console.log("-----------------------------------"); 
        
        // * foor of loop
//* we use for of loop for arrays. ıt is very hand way to iterate through an array if we are not interested in the index of each element in the array.
    /*
        for(const element of arr){
            code goes here
        }
    */

        const sayilar=[1,2,3,4,5];
        for(const sayi of sayilar){
            console.log(sayi);
        }

        console.log("-----------------------------------"); 

        for (const sayi of sayilar){
            console.log(sayi * sayi);
        }

        console.log("-----------------------------------"); 

        // adding all the numbers in the array.
        let toplam=0;
        for(const sayi of sayilar){
            toplam=toplam+sayi;
        }

        // can be also shorten like this, sum += num
        // after this we will use the shorter synthax(+=, -=, *=, /= etc)
        console.log(toplam);
        console.log("-----------------------------------"); 

        const webTechs=['html','css','JavaScript','React','Redux','Node','MongoDB'];
        for(const web of webTechs){
            console.log(web.toUpperCase());
        }

        console.log("-----------------------------------"); 

        for(const web of webTechs){
            console.log(web[0]);
        }

        console.log("-----------------------------------"); 

        const ulkem=['Turkiye','Almanya','İngiltere','Abd','Rusya'];
        const yeniDizi=[];
        for(const ulke of ulkem){
            yeniDizi.push(ulke.toUpperCase());
        }
        console.log(yeniDizi);

        console.log("-----------------------------------"); 

        //* BREAK

        // * break is used to interrupt a loop
        for(let i=0;i<=5;i++){
            if(i==3){
                break;
            }
            console.log(i);
        }

        console.log("-----------------------------------"); 

        //* continue

        // * we use the keyword continue to skip a certain iterations.
        for(let i=0;i<=5;i++){
            if(i==3){
                continue;
            }
            console.log(i);
        }