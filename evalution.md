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