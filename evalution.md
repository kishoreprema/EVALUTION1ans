### 1.prime number ###
**alogorithm**

    - step 1. start the program.
    - step 2. write a function with parameter and assign to a variable.
    - step 3. if the value is 1 , it will return false.
    - step 4. if the value is 2 , it will return ture.
    - step 5 . if the number is above 2 ,it will check the conditin n % x == 0.
    - step 6. if it satisfies the conditon it will return false.
    - step 7. else it will return ture.
    - step 8. stop.

**psuedocode**
```
BEGIN
    FUNCTION test_prime(n)
        IF(n===1)
         RETURN false
            ELSEIF(n===2)
         RETURN ture
        IF(n % x == 0)
            RETURN false
            THEN 
            RETURN ture
        ENDIF
    ENDFUNCTION
END
```

**code**
```javascript
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(5));
```
**output**
```console
true
```

### 2.Difference between == and === ###
**Algorithm**

    - step 1. step 1. Start the program.
    - step 2. now assigning values to a variable.
    - step 3. Then compare the values to types.
    - step 4. after comparision it will print either true or false.
    - step 5. stop

**psuedocode**
```
    BEGIN
     INIT a
     INIT c
    COMPARE a == c
        PRINT output
     CHECK a === c 
        PRINT output 
    END 
```

**code for ==**
```javascript
var a = 1;
var c = true;
console.log(a == c);
```
**output**
```console
true
```
**code for ===**
```javascript
var a = 1;
var c = true;
console.log(a === c);
```
**output**
```console
false
```

### 3. reverse a string ###
**Algorithm**

    - step 1. Start the program.
    - step 2. create a function with  name reverse string.
    - step 3. Then add the string reversly with reversed variable.
    - step 4. Call the function with string.
    - step 5. print the result
    - step 6. stop

**psuedocode**
```
    BEGIN
        fuction reversestring(str)
        return str.spilt("").reverse().join("");
        call the string
    END
```

**code**
```javascript
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
```

**output**
```console
"olleh"
```

### 4. reverse the word ###
**Algorithm**

    - step 1. Start the program.
    - step 2. create a function with  name reverse .
    - step 3. Then add the word reversly with reversed variable.
    - step 4. assign the words 
    - step 4. Call the function with word.
    - step 5. print the result
    - step 6. stop.

**psuedocode**
```
    BEGIN
        function reverse(word)
        word,spilt("").reverse().join("")
        word=""
        print the output
    END
```

**code**
```javascript
function reverse (word) {   
    return  word.split(" ").reverse().join(" ")

}
word = 'u and me'
console.log(reverse(word))
```

**output**
```console
me and u
```
### 5.Palindrome ###
**Algorithm**

    - Step 1. Start the program .
    - Step 2. Create a function with string parameter
    - Step 3. Initialise the varibale to know the length of string.
    - Step 4. Run the for loop for iteration of half word.
    - Step 5. Use if condition to check first value with last value else print not palindrome.
    - Step 6. Then call the function with string parameter.
    - Step 7. Stop.

**psuedocode**
```
BEGIN
FUNCTION Palindrome(str)
     SET size = str.length;
     FOR (let i = 0; i < size / 2; i++)
       IF str[i] !== str[size - 1 - i]) 
         RETURN ("not a palindrome")
        ENDIF
       ENDFOR
     RETURN ("It is a palindrome")
PRINT (checkPalindrome("malayalam")
PRINT (checkPalindrome("kishore")
```
**code**
```javascript

function Palindrome(str) {
    const size = str.length;
    for (let i = 0; i < size / 2; i++) {
      if (str[i] !== str[size - 1 - i]) {
        return("NOT a palindrome");
      }
    }
    return("It is a palindrome");
}
console.log(Palindrome("malayalam"));
console.log(Palindrome("kishore"));
```
**output**
```console
It is a palindrome
 NOT a palindrome
 ```

### 6.  Difference between foreach and map ###
**Algorithm for map**

    - Step 1. start the program
    - Step 2. Create a array with number values.
    - Step 3. Use map method with the array and    write the event.
    - Step 4. Print the values
    - Step 5. stop
   
**psuedocode**
```
    BEGIN
        int number=[]
        print map(element => element * element))
        print output
    END
```
**code**
```javascript
var numbers = [6,7,4,9,3]
console.log(numbers.map(element => element * element)) 
```
**output**
```console
[36, 49, 16, 81, 9]
```
**Algorithm for foreach**

    - Step 1. start the program
    - Step 2. Create a array with number values.
    - Step 3. Use map method with the array and write the event.
    - Step 4. Print the values
    - Step 5. stop

**psuedocode**
```
    BEGIN
        INIT numbers
        PRINT forEach(element => element * element)
    END
```

**code**
```javascript
var myArray = [
    { rollnum : 67, name: "kishore" },
    { rollnum : 68, name: "kamal" },
    { rollnum : 69, name: "pranav" },
  ]
myArray.forEach(element => console.log(element.name))
```

**output**
```console
kishore
kamal
pranav
```

### 7. random number ###
**Algorithm**

    - Step 1. start the program
    - Step 2. Use Math.floor to returns the largest integer less than or equal to a given number
    - Step 3. Math.random to get the random value till given number.
    - Step 5. Add the number 1 to avoid the 0 values.
    - Step 6. Then print the number.
    - Step 7. Stop.

**psuedocode**
```
BEGIN
inti startvalue
inti  endvalue
value = (Math.floor((Math.random() * 5) + 1));
print (`Random value between ${startvalue} and ${endvalue} is ${value}`)
END
```
**code**
```javascript
var startvalue= 1;
var endvalue = 5


 value = Math.floor(Math.random() * (endvalue- startvalue+ 1)) + startvalue;


console.log(`Random value between ${startvalue} and ${endvalue} is ${value}`)
```
**output**
```console
Random value between 1 and 5 is 2
```

### 8.remove duplicate value ###
**Algorithm**

    - Step 1. start the program
    - Step 2. Create a array with number values.
    - Step 3. use SET method
    - Step 4. array initialized with SET method
    - Step 5. Print the values
    - Step 6. stop

**psuedocode**
```
BEGIN
    INIT numbers
    INIT uniquenumbers
    SET numbers
    PRINT uniquenumbers
END
```

**code**
```javascript
let numbers = [1,2,9,4,5,8,3,5,1,4,5];
let uniquenumbers = [...new Set(numbers)];

console.log(uniquenumbers);
```

**output**
```console
[1, 2, 9, 4, 5, 8, 3]
```

### 9.sum of 10 integers ###
**Algorithm**

    - Step 1. start the program.
    - Step 2. Declare two varibale sum = 0 , i = 1.
    - Step 3. Use for loop to iterate the values.
    - Step 4. Add the iterated values inside the for.
    - Step 5. Print the value and call the function.
    - Step 6. Stop.

**psuedocode**
```
BEGIN
    INIT naturalnum
    i and sum as integer; 
    READ naturalnum; 
    for i upto n increment i by 1 and i=1 
    { sum=sum+i; } 
    PRINT sum; 
END
```
**code**
```javascript
var nuturalnum=10;
var sum = 0;
for (let i = 1; i <= nuturalnum; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);
```

**output**
```console
The sum of natural numbers: 55
```

### 10. number of odd and even ###
**Algorithm**

    - Step 1. start the program
    - Step 2. Declare two variables odd and even with 0 value.
    - Step 3. Iterate for loop till 100 times.
    - Step 4. if(i % 2 == 0) then print even numbers
    - Step 5. else print odd numbers.
    - Step 7. Stop.

**psuedocode**
```
BEGIN
  INIT count =100;
  INIT evennum=0,oddnum=0;
  FOR(let i=0;i<=value;i++) 
    IF (i % 2 == 0) 
      evennum = evennum + i;
    ELSE 
      oddnum = oddnum + i;
    ENDIF
  PRINT ("total of even",evennum);
  PRINT ("total of odd",oddnum); 
END
```
**code**
```javascript
var count =100;
oddnum=0;evennum=0;
for (i = 1; i <=a; i++)
  {
    if (i % 2 == 0)
      evennum = evennum + i;
    else
      oddnum = oddnum + i;
  }
console.log("total of odd", oddnum);
console.log("total of even", evennum);
```

**output**
```console
total of odd 2500
total of even 2550
```


### 11. merge two array ###
**Algorithm**

    - Step 1. start the program.
    - Step 2. Declare two arrays arr1,arr2.
    - Step 3. creat the new array
    - Step 4. to concatinate the array values to the new array.
    - Step 5. Print the new array
    - Step 6. Stop.

**psuedocode**
```
BEGIN
    INIT arr1;
    INIT arr2;
    THEN 
    ADD arr1,arr2 ;
    PRINT new array
END
```
**code**
``` javascript
var array1 = [1,2,9,3,5,1,4,5];
var array2 = [11,54,70,40];

var mergedarray = array1.concat(array2); 
console.log(mergedarray);
```

**output**
```console
[1, 2, 9, 3, 5, 1, 4, 5, 11, 54, 70, 40]
```

### 12. remove duplicate array ###
**Algorithm**

    - Step 1. Start the program.
    - Step 2. initialize a constructor and array.
    - Step 3. And use filtered function to iterate the values in array.
    - Step 4. to check the name and id in consructor with has() method by using declared variables
    - Step 5. Check both values using !duplicate1,duplicate2 and return the value.
    - Step 6. Then call the function with array.
    - Step 7. print the output.
    - Step 8. stop.

**psuedocode**
```
BEGIN
INIT set();
DECLARE arr and assigning the objects;
FUNCTION using filtered=arr.filter();
  SET add values.id
  SET add values.name
  RETURN !duplicate1,!duplicate2
ENDFUNCTION
PRINT a;
END
```
**code**
```javascript
var a = new Set();
var arr = [
    {id: 1, name: 'Stephen covey'},
    {id: 2, name: 'Robin Sharma' }, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 5, name: 'James clear'},
    {id: 5, name: 'James clear'},
];

var filteredArr = arr.filter(values => {
  const duplicate1= a.has(values.id);
  a.add(values.id);
  const duplicate2= a.has(values.id);
  a.add(values.name);
  return !duplicate1,!duplicate2 ;
});
console.log(a);
```

**output**
```console
0: 1
1: "Stephen covey"
2: 2
3: "Robin Sharma"
4: 3
5: "Tolstoy"
6: 5
7: "James clear"
```
 
### 13.Compare two objects, If all properties are equal return true or return false? ###
**Algorithm**

    - Step 1. Start the program.
    - Step 2. Initialize the objects.
    - Step 3. To create a function with object1,object2 parameters.
    - Step 4. To get the keys from two parameters then check both length.
    - Step 5. To check both of properties with if condition return the boolean values.
    - Step 6. Call the function with given properties.
    - Step 7. Print result
    - Step 8. Stop.

**psuedocode**
```
BEGIN
INIT a,b,c and d
FUNCTION cmp(object1,object2)
    INIT keys1 = Object.keys(object1);
    INIT keys2 = Object.keys(object2);
    IF(keys1.length !== keys2.length)THEN
      RETURN false;
    ENDIF
    FOR(let key of keys1) 
       IF(object1[key] !== object2[key]) THEN
         RETURN false;
       ELSE
         RETURN true;
       ENDIF
    ENDFOR
ENDFUNCTION
END
```

**code**
```javascript
var a={id: 1, name: "kishore"};
var b={id: 1, name: "kishore"};
var c={id: 1, name: "kishore"};
var d={id: 1, name: "kishore"};
function cmp(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  console.log(cmp(a, c)); // => true
  console.log(cmp(c, d)); // => false
  ```

  **output**
  ```console    
    true
    true
```

### 14. Take a multidimensional array and flat the array? ###
**Algorithm**

    - Step 1. start program
    - Step 2. To create a muiltidimentional array.
    - Step 3. To use multi.flat to flat the array to single array.
    - Step 4. Print the Array.
    - Step 5. Stop.

**psuedocode**
```
BEGIN
INIT multi = [1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]];
PRINT (multi.flat(Infinity));
END
```

**code**
```javascript

let multidimensional = [1,4,2,3,[10,20,20], [100,500,700,600],
[2000,1000]];
console.log(multidimensional.flat(Infinity));
```
**output**
```console
[1, 4, 2, 3, 10, 20, 20, 100, 500, 700, 600, 2000, 1000]
```


### 15. array reduce method ###
**Algorithm**

    - Step 1. Start the program.
    - Step 2. Initialize the array and its objects.
    - Step 3. TO use the reduce function to iterate previous value with current value.
    - Step 4. Check the both values and add count into previous value or make it one
    - Step 5. Print the value.
    - Step 6. Stop.
**Psuedocode**
```
BEGIN
INIT peoples=[{id :1 ,name:'kishore'}]
DECLARE groupByid = peoples.reduce((r,a)
  r[a.id] = r[a.id] + 1 || 1;
  RETURN r;
PRINT groupByid; 
END
```
**code**
```javascript
var people = [{id: 1, name: 'kishore' },{id: 2, name: 'Annand'}, 
{id: 3, name: 'Vasnath'}];
let groupbyid = people.reduce((r, a) => {
  r[a.id]=a[r.id]+1 || 1
   return r;
  }, {});
  console.log(groupbyid);
  ```

  **output**
  ``` console
  {1: 1, 2: 1, 3: 1}
  ```

### 16. display a pattern like right angle triangle ###
**Algorithm**

    - Step 1. Start the program.
    - Step 2. Declare one empty string and size.
    - Step 3. for loop will execute and increase the i values.
    - Step 4. Then print the string.
    - Step 5. Stop.

**psuedocode**
```
BEGIN
INIT string = "";
INIT length = 5;
FOR(let i = 1; i <= length; i++) 
    SET string += "*";
ENDFOR
PRINT (string);
```

**code**
```javascript
var string = "";
var length =7;
for(var i=1; i<=length; i++)

{
  string= string+"*";
  console.log(string);
}
```

**output**
```console
 *
 **
 ***
 ****
 *****
 ******
 *******
 ```

 ### 17.  Write a program in Javascript to make such a pattern like right angle triangle with number increased by 1 ###
 **Algorithm**

    - Step 1. Start the program.
    - Step 2. Declare empty string and nitialize the value of 4
    - Step 3. Initialize count with value of 1.
    - Step 4. Run for loop 4 times then run the nested for loop i times.
    - Step 5. Add the count value to a variable as string and it will execute "\n"
    - Step 6. Print the string variable. 
    - Step 7. Stop.

**psuedocode**
```
BEGIN 
INIT string = "";
INIT size = 4; 
INIT count = 1;
FOR(let i = 1; i <= size; i++)
   FOR(let j = 1; j <= i; j++)
     SET string += " " + count;
     SETcount++;
   ENDFOR
   SET string += "\n";
ENDFOR
PRINT (string);
END
```

**code**
```javascript
var string = "";
var size = 4; 
var count = 1;
for (let i = 1; i <= size; i++) {
  for (let j = 1; j <= i; j++) {
    string += " "+count;
    count++;
  }
  string += "\n";
}
console.log(string);
```

**output**
```console
 1
 2 3
 4 5 6
 7 8 9 10
 ```


### 18.Write a program in Javascript to make such a pattern like a pyramid with numbers increased by 1 ###
**Algorithm**

    - Step 1. start the program.
    - step 2. Initialize count variable and one empty string.
    - Step 3. Create for loop to iterate values of specified condition.
    - Step 4. After that create another for loop with condition of (2*i)-i
    - Step 5. Add the count value to string and increment count.
    - Step 6. print the value.
    - Step 7. Stop.

**psuedocode**
```
BEGIN
INIT n;
INIT number = "";
INIT count=1;
FOR (let i = 1;i<n;i++)
  FOR (let j = 1;j<= n - i;j++) 
    SET number += " ";
    ENDFOR
  FOR (let k = 0; k < 2*i-i ; k++) 
   SET number += count;
   SET count++;
   SET number += "
   ENDFOR
  SET += "\n";
  ENDFOR
PRINT (number);
END
```
**code**
```javascript
var n=5;
var num = "";
var count = 1;
for (let i = 1; i < n; i++) {
  for (let j = 1; j <= n - i; j++) {
    num += " ";
  }
  for (let k = 0; k < 2*i-i; k++) {
    num +=count;
    count++;
    num +=" "; 
  }  
  num += "\n";
}
console.log(num);
```

**output**
```console
    1 
   2 3 
  4 5 6 
 7 8 9 10 
```

### 19.display the pattern like a diamond ###
**Algorithm**

Step 1. Start the program.
Step 2. Initialize n variable and empty string.
Step 3. create for loop and will execute 2*i-1 times for print stars.
Step 4. To add "/n" for printing new line .
Step 5. After that it will execute reverse pyramid.
Step 6. print the values.
Step 7. Stop

**pseudocode**
```
BEGIN
INIT n = 5;
INIT string = "";
FOR (let i = 1; i <= n; i++) 
  FOR (let j = 1; j < n - i + 1; j++)
   SET string += " ";
  ENDFOR
  FOR (let k = 1; k <= 2 * i - 1; k++)
   SET string += "*"; 
   SET string += "\n";
  ENDFOR
ENDFOR
 FOR (let i = 1; i <= n - 1; i++)
    FOR (let j = 1; j < i + 1; j++)
     SET string += " ";
    ENDFOR
    FOR (let k = 1; k <= 2 * (n - i) - 1; k++)
      SET string += "*"; 
      SET string += "\n";
    ENDFOR  
ENDFOR
PRINT (string);
END
```

**code**
```javascript
var n = 5;
var string= "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j < n -i + 1; j++) {
    string += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 1; j < i+1; j++) {
    string += " ";
  }
  for (let k = 1;k <= 2 * (n - i) - 1;k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
```

**output**
```console
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

### 20.explain the terms 

**colsole.log()**
    - It is used to print element
**code**
```javascript
console.log("YAVAR");
```
**output**
```console
YAVAR
```

**console.dir()**
    - It is used to display the properties and methods of the object.

**code**
```javasceript
var object = { property1 : "name", property1 : 67, method : function(){} };
console.dir(object);
```
**output**
```console
method: ƒ ()
property1: 67
__proto__: Object
```
**console.count**
    -  The console.count() method logs the number of times that this particular call to count() has been called.

**code**
```javascript
for (let i = 0; i < 5; i++) {
    console.count("myLabel");
}
```
**output**
```console
myLabel: 1
myLabel: 2
myLabel: 3
myLabel: 4
myLabel: 5
```

**console time() and console.timeEnd()**
- The **console.time()** method starts a timer you can use to track how long an operation takes.
  - The **console.timeEnd()** stops a timer that was previously started by calling console.time().

**code**
```javascript
console.time();
let arr = Array(1000);
for(let i=0; i<arr.length; i++) {
arr[i] = new Object();
}
console.timeEnd(); 
```
**output**
```console
default: 0.254150390625 ms
```

 **console.trace()**

  - The trace() method displays a trace that show how the code ended up at a certain point.

**code**
```javascript  
function foo() {
    function bar() {
      console.trace();
    }
    bar();
  }
    foo();
```
**output**
```console
bar	
foo	
(anonymous)
```

**console.group() and group end()**

  - The **group()** method starts a message group.All new messages will be written inside this group.
  - The **groupEnd()** ends a message group.

**code**
```javascript
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
console.groupEnd();
console.log("and we are back.");  
```
**output**
```console
Hello world!
Hello again, this time inside a group!
and we are back.
```

**console.assert()**

  - The **console.assert()** method writes an error message to the console if the assertion is   false. If the assertion is true, nothing happens.

**code**
```javascript
function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}
assert();
```
**output**
```console
Assertion failed
```
