function add(n1: number, n2:number) {
 return n1 + n2
}

//void daca vrei sa nu returneze nimic
function printResult(num:number):void {
  console.log('Result ' + num)
}

printResult(add(5,12));

//26. Functions as Types

let combineValues: Function;
combineValues = add;

console.log(combineValues(8,8))

//27. Function Types & Callbacks
function addAndHandle(n1:number, n2: number, cb:(num:number) => void) {
  const result = n1 + n2
  cb(result)
}

addAndHandle(10, 20, (result) =>{
  console.log(result)
})

function sendRequest(data: string, cb: (response: any) => void) {
  	  // ... sending a request with "data"
  	  return cb({data: 'Hi there!'});
  	}
  	 
  	sendRequest('Send this!', (response) => { 
  	  console.log(response);
  	  return true;
	 });
  
   //28. The "unknown" Type

   let userInput: unknown;
   let userName: string
   
   userInput = 5;
   userInput = 'Max'
   //error
   //userName = userInput;
   //corect
   if(typeof userInput === 'string') {
     userName = userInput;
   }

   //29. The "never" Type
   function generateError(message: string, code: number):never {
     throw{message: message, errorCode: code}
   }

   const result = generateError('An error occured', 500);
   console.log('R:', result)