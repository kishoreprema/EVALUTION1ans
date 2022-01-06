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
