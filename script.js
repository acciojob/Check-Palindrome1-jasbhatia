// complete the given function

function palindrome(str){
var res= str.toLowerCase();
	let start=0;
	let end=res.length;
	while(start<=end){
		if(res.charAt(start)!=res.charAt(end){
			return false;
		}
		else{
			start++;
			end--;
		}
	}
	return true;
	
}
module.exports = palindrome
