//console log
console.log("hell0");
//console.dir
let object = { property1 : 1, property1 : 2, method : function(){} };
console.dir(object);
//cosole.count
for (let i = 0; i < 5; i++) {
    console.count("myLabel");
}
//console.table
var arr1=["Audi", "Volvo", "Ford"]
console.table(arr1);
//console.time()andtimeEnd()
console.time();
let arr = Array(1000);
for(let i=0; i<arr.length; i++) {
arr[i] = new Object();
}
console.timeEnd();  
//console.trace()
function foo() {
    function bar() {
      console.trace();
    }
    bar();
  }
    foo();
//console group and groupEnd
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
console.groupEnd();
console.log("and we are back.");    
//console.assert
function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}
assert();