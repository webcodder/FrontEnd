qqCheck=function(arr){
    return new qqCheck.fn.init(arr);
}
qqCheck.fn=qqCheck.prototype={
    constructor:qqCheck,
    random:function(arr){
        var len=arr.length;
        var i=this.pow(arr)
        return Math.floor(Math.random()*Math.pow(10,i));
    },
    newArr:function(arr){
        var len=arr.length;
        var i=this.pow(arr);
        var j=Math.ceil(Math.pow(10,i)/len)
        var str=""
        var s=arr+","
        for(;j>0;j--){
            str+=s
        }
        var nArr=str.replace(/,+$/,'').split(",")
        return nArr
    },
    pow:function(arr){
        var len=arr.length;
        var i=0;
        while(Math.ceil(len/Math.pow(10,i))>1){
            i++
        }
        return i
    }
}
qqCheck.fn.nVal=function(arr){
    return qqCheck.fn.newArr(arr)[qqCheck.fn.random(arr)];
}
console.log(qqCheck.fn.nVal);
qqCheck.fn.init=function(arr){
    this.nVal=qqCheck.fn.nVal(arr);
}
var qqArr=[3654993551,3466645416,1954887266,2186606270,2773776325 ]
var newqq=qqCheck(qqArr).nVal;
// console.log(qqCheck.fn.newArr(arr));
$(".toqq").attr({
    href:"http://wpa.qq.com/msgrd?v=3&uin="+newqq+"&site=qq&menu=yes",
})
    var localtime;
    function getlocaltime(){
        localtime = formatDate1(new Date());
    }