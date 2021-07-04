function fblq(n){
    var num1 = 1;
    var num2 = 2;
    var sum = num2;
    for(var i =2;i < n;i++){
        sum= num1+num2;
        num1=num2;
        num2=sum;
    }
    return sum;
}
//试用斐波拉契，第二次上传