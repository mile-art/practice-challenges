let booleanPrimeNumbers=Array(1001);
let primeNumberUnits=0;
booleanPrimeNumbers.fill(true);
booleanPrimeNumbers[0]=false;
booleanPrimeNumbers[1]=false;
for(let number=3;number<=1000;number++){
	if(number%2===0){
		booleanPrimeNumbers[number]=false;
	}else{
		for(let i=2;i<=number;i++){
			if(number%i===0 && number!==i){
				booleanPrimeNumbers[number]=false;
				break;
			}
		}
	}
}

for(let number=0;number<=booleanPrimeNumbers.length;number++){
	if(booleanPrimeNumbers[number]===true){
		primeNumberUnits++;
		console.log(number);
	}
}
console.log(`1000までの素数の数:${primeNumberUnits}個`);
