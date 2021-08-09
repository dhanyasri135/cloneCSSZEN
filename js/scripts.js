// string concatenation
// var string="Hello";
// string+=" World";
// console.log(string+"!")


// regular math operations
// console.log((5+4)/3);
// console.log(undefined/5);
// function test1 (a) {
//     console.log(a/5);
// }
// test1();


// equality
// var x=4, y=4;
// if (x==y) {
//     console.log("x equal to y");
// }

// strict equality
// x="4";
// if (x==y) {
//     console.log("equal");
// }



// style and syntax
// function a()
// {
//     return
//     {
//         name:"dhanya"
//     };
// }
// function b() {
//     return {
//         name:"dhanya"
//     };
// }
// console.log(a());
// console.log(b());



// for loop
// var sum=0;
// for (var i=0; i<10; i++) {
//     sum=sum+i; 
// }
// console.log("sum of 0 through 9 is" + sum)



// functions
// function orderChickenWith(sidedish) {
//     if (sidedish===undefined) {
//         sidedish = "rice";
//     }
//     console.log("chicken with " + sidedish);
// }
// orderChickenWith("noodles");
// orderChickenWith();


// example
// var x = 10;
// if ( (null) || (console.log("Hello")) || x > 5 ) {
//   console.log("Hello");
// }



// object creation
// var company=new Object();
// company.name="FaceBook";
// company.ceo=new Object();
// company.ceo.firstname="Mark";
// company.ceo.favColor="blue";
// console.log(company);
// console.log("company CEO name is: " + company.ceo.firstname);
// console.log(company["name"]);
// var stockPropName="stock of company";
// company[stockPropName]=110;
// console.log("stock price is : " + company[stockPropName])



// better way : object literal
//  var facebook = {
//      name:"FaceBook",
//      ceo: {
//          firstname:"Mark",
//          favColor:"blue"
//      },
//      "stock of company": 110
//  };
//  console.log(facebook)


// Functions
//  function multiply(x,y) {
//      return x*y;
//  }

//  multiply.version="v.1.0.0";
//  console.log(multiply.version); 


 // Function facctory
//  function MakeMultiplier(multiplier) {
//      var MyFunc=function(x) {
//          return multiplier*x;
//      };
//      return MyFunc;
//  }

//  var multiplyBy3=MakeMultiplier(3);
//  console.log(multiplyBy3(20));
//  var doubleAll=MakeMultiplier(2);
//  console.log(doubleAll(100));


//  //passing functions as arguments
//  function doOperation(x,operation) {
//      return operation(x);
//  }

//  var result=doOperation(5,multiplyBy3);
//  console.log(result);
//  result=doOperation(200,doubleAll);
//  console.log(result);


// pass by value and pass by reference

// var a={x:7};
// var b=a;
// console.log(b);


