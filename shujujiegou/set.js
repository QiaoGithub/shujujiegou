var s=new Set()

s.add(1)
s.add(2)
s.add(3)
s.add(4)

var a=new Set()

a.add(3)
a.add(6)
a.add(5)
a.add(4)

// s.forEach(function(value1,value2,set){
//     console.log('value1:'+value1)
//     console.log('value2:'+value2)
//     console.log('set:'+set)
// })

var arr=[1,345,-123,543-234,2451,-1]

//filter（fn）fn函数返回true 就添加到数组中
var arr2=arr.filter(function(value){
    if(value>0) return true
})
// console.log(arr2)

//交集
var intersect=new Set([...a].filter( x => s.has(x)))
//差集
var difference=new Set([...a].filter( x => !s.has(x)))