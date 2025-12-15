let num=125,rev=0,temp=num;
while(num>0){
    let digit=num%10
    rev=rev*10+digit
    num=parseInt(num/10)
}
if(rev==temp){
    console.log("Palindrome")
}else{
    console.log("Not a Palindrome")
}