/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */

function subArray(arr){
	let jmlMax;
	let start=0;
  let end=0;
  for (let i=0;i<arr.length;i++){
		let temp=arr[i];
    for (let j=i+1;j<arr.length;j++){
      temp+=arr[j];
      if(i==0){
        jmlMax=temp; //inisiasi nilai awal max
      }
      if (i>0 && temp>jmlMax){ //compare
        jmlMax=temp;
        start=i;
        end=j;
      }
    }
  }
  return [arr.slice(start,end+1),jmlMax]; // ambil aray yg disimpain dari index i nya dan dipotong hingga index j +1 karena agar yg belakang include, nilai max
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
