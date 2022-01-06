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

const filteredArr = arr.filter(values => {
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

