const getNextFizz=(value)=>{
	return Math.ceil(value/3)*3;
}

const getNextBuzz=(value)=>{
	return Math.ceil(value/5)*5;
}

const START=1;
const END=100;
let count=START;
let nextFizz=getNextFizz(START);
let nextBuzz=getNextBuzz(START);
let boolean;

const next=()=>{
	if(count<=END){
		if(nextFizz===count && nextBuzz===count){
			console.log("Fizz Buzz");
			nextFizz+=3;
			nextBuzz+=5;
		}else if(nextFizz===count){
			console.log("Fizz");
			nextFizz+=3;
		}else if(nextBuzz===count){
			console.log("Buzz");
			nextBuzz+=5;
		}else{
			console.log(count);
		}
		count++;
		return true;
	}
	return false;
}

do{
	boolean=next();
}while(boolean);