/**
* The first fucntion prints out numbers 0-9 then the last console log will print the value 10.
This is because i is still valid outside the for loop — the scope of i is not bounded by the curly braces {} 
  */

for(var i = 0;  i<10; i++)  {
  console.log(i)
}
  console.log(i)

