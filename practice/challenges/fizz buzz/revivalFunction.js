function fizzBuzz(next,end){
	if(next<=end){
		let fizz= next%3===0;
		let buzz= next%5===0;
		if(fizz&&buzz){
			console.log("Fizz Buzz");
		}else if(fizz){
			console.log("Fizz");
		}else if(buzz){
			console.log("Buzz");
		}else{
			console.log(next);
		}
		fizzBuzz(next+1,end);
	}
}

fizzBuzz(-10,100);