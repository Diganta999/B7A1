// Problem 1 

const filterEvenNumbers =(input:number[]):number[]=>{
  return input.filter((number)=>number%2===0);
}


// Problem 2 

const reverseString =(input:string):string=>{
    return input.split("").reverse().join("");
};

// Problem 3 

type StringOrNumber = string | number;

const checkType = (input:StringOrNumber):string=>{
    if(typeof input === "string"){
        return "String"
    }
    return "Number";
};

