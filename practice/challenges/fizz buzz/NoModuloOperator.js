/**次の３で割れる数を返す*/
const getNextFizz= (value)=>{
	let count=0;
	let fizz=value/3;
	let temp=0;
	while(true){
		if(count<=fizz){
			temp=count;
			count=count+10;
		}else {
			count=temp;
			while(true){
				if(count>=fizz){
					return count*3;
				}
				count++;
			}
		}
	}
}
/**次の５で割れる数を返す */
const getNextBuzz= (value)=>{
	let count=0;
	let buzz=value/5;
	let temp=0;
	while(true){
		if(count<=buzz){
			temp=count;
			count=count+10;
		}else {
			count=temp;
			while(true){
				if(count>=buzz){
					return count*5;
				}
				count++;
			}
		}
	}
}

const START=-20;
const END=100;
let counter=START;
let nextFizz=getNextFizz(START);
let nextBuzz=getNextBuzz(START);
let boolean;

/**endを超えてなければ現在値を出力しtrueを返す。超えていればfalseを返す。*/
const next= ()=>{
	if(counter<=END){
		if(nextFizz===counter && nextBuzz===counter){
			console.log("Fizz Buzz");
			nextFizz+=3;
			nextBuzz+=5;
		} else if(nextFizz===counter){
			console.log("Fizz");
			nextFizz+=3;
		} else if(nextBuzz===counter){
			console.log("Buzz");
			nextBuzz+=5;
		}else{
		console.log(counter);
		}
		counter++;
		return true;
	}else{
		return false;
	}
}

/******呼び出し実行*******/
do{
	boolean=next();
}while(boolean);
/**A */