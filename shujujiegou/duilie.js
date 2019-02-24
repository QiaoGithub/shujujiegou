var Queue = function () {
    var items = []

    //入队
    this.enqeueu = function (e) {
        items.push(e)
    }
    //出队
    this.deqeueu = function () {
        return items.shift()
    }
    //查看队头
    this.front = function () {
        return items[0]
    }
    //检查队列长度
    this.size = function () {
        return items.length
    }
    //检查队列是否为空
    this.isEmpty = function () {
        return items.length === 0
    }
}


var names = ['a', 'b', 'c', 'd', 'e', 'f']
var chuanhua = function (names, number) {
    var arr = new Queue()
    for (var i = 0; i < names.length; i++) {
        arr.enqeueu(names[i])
    }

    //核心部分
    var taotai
    while (arr.size() > 1) {
        for (var i = 0; i < number - 1; i++) {
            arr.enqeueu(arr.deqeueu())
        }
        taotai = arr.deqeueu()
        console.log('淘汰玩家是：' + taotai)
    }
    return '获胜玩家：' + arr.deqeueu()
}

//优先级进入
var PriorityQeueu = function (names, elment) {
    var items = []

    //优先级构造器
    var PriorityObject = function (e, priority) {
        this.priority = priority
        this.elment = e
    }

    this.enqeueu = function (e, priority) {
        var priorityObject = new PriorityObject(e, priority)
        var added = false
        for (var i = 0; i < items.length; i++) {
            if (priorityObject.priority > items[i].priority) {
                items.splice(i, 0, priorityObject)
                added = true
                break
            }
        }
        if (!added) {
            items.push(priorityObject)
        }
    }
    this.getItems=function(){
        return items
    }
}

var pq=new PriorityQeueu()
pq.enqeueu('小黑',10)
pq.enqeueu('小百',20)