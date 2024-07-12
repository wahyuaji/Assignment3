/**
Diberikan sebuah function yang menerima satu parameter berupa string. 
Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang berjarak tepat 3 karakter lain (termasuk spasi). 
Jika tidak ditemukan sama sekali, kembalikan nilai false.

Contoh: 
barbarian akan mengembalikan nilai true
you are boring akan mengembalikan nilai true
bacon sand meat akan mengembalikan nilai false

 */ 

function threeStepsAB(text) {
	let result=false;
	for(let i=0;i<text.length;i++){
		let jarak;
		if(text[i]=="a" || text[i]=="b"){
			for(let j=i+1;j<text.length;j++){
        switch (text[j]){
          case "a":
            if(text[i]=="b"){
                jarak=j-i-1;
            }
          case "b":
            if(text[i]=="a"){
                jarak=j-i-1;
            }
        }
			}
    	if(jarak==3){
    	  result=true;
    	  return result;
    	}
    	else{
    	  result=false;
    	}
    }
    jarak=0;
  }
  return result;
}

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false