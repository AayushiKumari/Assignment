const temp = prompt("Enter an array : ");

const inp_array = temp.split(' ').map(Number);

const sorted_array = inp_array.sort((a, b) => b - a);

console.log("Sorted Array in Descending Order: " + sorted_array);
