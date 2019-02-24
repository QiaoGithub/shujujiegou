var Set2 = function () {
    var items = {}

    //判断是否有该元素
    this.has = function (value) {
        return items.hasOwnProperty(value)
    }

    //添加
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value
            return value
        } else {
            return false
        }
    }

    //移除
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value]
            return true
        } else {
            return false
        }
    }

    //长度
    this.size = function () {
        // var count=0
        // for(var i in items){
        //     if(items.hasOwnProperty(i)){
        //         count ++
        //     }
        // }
        // return count

        return Object.keys(items).length
    }
    //清空
    this.clear = function () {
        items = {}
    }

    this.value = function () {
        var values = []
        for (var i in items) {
            if (items.hasOwnProperty(i)) {
                values.push(items[i])
            }
        }
        return values
    }

    //并集
    this.union = function (otherSet) {
        var arr = this.value()
        var resultSet = new Set2()
        for (var i = 0; i < arr.length; i++) {
            resultSet.add(arr[i])
        }

        arr = otherSet.value()
        for (var i = 0; i < arr.length; i++) {
            resultSet.add(arr[i])
        }

        return resultSet
    }

    //交集
    this.intersection = function (otherSet) {
        var resultSet = new Set2()

        var arr = this.value()
        for (var i = 0; i < arr.length; i++) {
                if (otherSet.has(arr[i])) {
                    resultSet.add(arr[i])
                }
        }
        return resultSet
    }

    //差集
    this.difference=function(otherSet){
        var resultSet=new Set2()

        var arr=this.value()
        for(var i=0;i<arr.length;i++){
            if(!otherSet.has(arr[i])){
                resultSet.add(arr[i])
            }
        }
        return resultSet
    }
}

var A = new Set2()
A.add(1)
A.add(2)
A.add(3)
A.add(5)

var B = new Set2()
B.add(2)
B.add(3)
B.add(4)