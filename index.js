// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
var check;
console.log(Array.isArray(a));
console.log(Array.isArray(b));

// Write a program that multiplies each entry in the following array by 2。
// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(let i=0; i<a.length; i++){
	a[i]=a[i]*2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var output ="";
for(let i=0; i<colors.length; i++)
{
 output+=colors[i];

 if(i<colors.length-1)
{
output+=" ";
}
}
console.log("Case one output: "+ output);
output ="";

for(let i=0; i<colors.length; i++)
{
 output+=colors[i];

 if(i<colors.length-1)
{
output+="+";
}
}
console.log("Case two output: "+ output);

output ="";
for(let i=0; i<colors.length; i++)
{
 output+=colors[i];

 if(i<colors.length-1)
{
output+=",";
}
}
console.log("Case three output: "+ output);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var array = [5, 1, 8, 10, 4];
let temp=0;
for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[j] > array[i]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
}
}
console.log(array);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var counter= 1;
var occurence = 0;
var index;
for (var i=0; i<a.length; i++)
{
        for (var j=i; j<a.length; j++)
        {
                if (a[i] == a[j])
                 occurence++;
                if (counter<occurence)
                {
                  counter=occurence; 
                  index = a[i];
                }
        }
        occurence=0;
}
console.log(index+" = " +counter +" times ") ;
