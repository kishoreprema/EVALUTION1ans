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

