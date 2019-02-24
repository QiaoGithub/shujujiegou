// 1.字典 Dictionary
// 2.散装表：哈希表 HashTable
var Dictionary = function (key) {
    var items = {}

    //检查
    this.has = function (key) {
        // return items.hasOwnPropery(key)
        return key in items
    }

    //建立
    this.set = function (key, value) {
        items[key] = value
    }

    //删除
    this.delete = function (key) {
        if (items.has(key)) {
            delete items[key]
            return true
        }
        return false
    }

    //获得value
    this.get = function (key) {
        if (items.has[key]) {
            return items[key]
        }
        return undefined
    }

    //获得items
    this.getItems = function () {
        return items
    }
}

//djb2算法散列函数
var djb2HashCode = function (key) {
    var hash = 5281
    for (var i = 0; i < key.length; i++) {
        hash = hash * 33 + key[i].charCodeAt()
    }
    return hash % 1013
}


//哈希表
var Hash = function () {
    var items = []
    //key => number =>散列值
    var loseloseHashCode = function (key) {
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key[i].charCodeAt()
        }
        return hash % 37
    }

    //添加
    this.put = function (key, value) {
        var position = loseloseHashCode(key)
        console.log(position + '-' + value)
        items[position] = value
    }

    //移除
    this.remove = function (key) {
        items[loseloseHashCode(key)] = undefined
    }

    //获得检索值
    this.get = function (key) {
        return items[loseloseHashCode(key)]
    }

    this.getItems = function () {
        return items
    }
}

var HashCode_L = function () {
    var items = []

    var likedList = function () {
        //链表头
        var head = null
        //链表长度
        var length = 0

        //辅助类：节点
        var Node = function (element) {
            this.element = element
            this.next = null
        }

        //链表尾添加元素
        this.append = function (element) {
            var node = new Node(element)
            // node ={
            // element:element
            // next:null 
            // }
            if (head == null) {
                head = node
            } else {
                var current = head
                while (current.next) {
                    current = current.next
                }
                //while执行完之后，current表示最后一项
                current.next = node
            }
            length++
        }

        //链表在某位置添加元素
        this.insert = function (position, element) {
            //越界
            if (position > -1 && position < length) {
                var node = new Node(element)
                if (position == 0) {
                    var current = head
                    head = node
                    head.next = current
                } else {
                    var index = 0
                    var previous = null
                    var current = head
                    while (index < position) {
                        previous = current
                        current = current.next
                        index++
                    }
                    previous.next = node
                    node.next = current
                }
                length++
            }
        }

        //移除链表某位置元素
        this.removeAt = function (position) {
            //越界
            if (position > -1 && position < length) {
                if (position == 0) {
                    var current = head
                    head = current.next
                } else {
                    var current = head
                    var index = 0
                    var previous = null
                    while (index < position) {
                        previous = current
                        current = current.next
                        index++
                    }
                    previous.next = current.next
                }
                length--
                return current
            }
            return null
        }

        //查找聊表元素位置
        this.indexOf = function (element) {
            var current = head
            var index = 0
            while (current) {
                if (element === current.element) {
                    return index
                }
                index++
                current = current.next
            }
            return -1
        }

        this.remove = function (element) {
            return this.removeAt(this.indexOf(element))
        }


        this.isEmpty = function () {
            return length == 0
        }

        this.size = function () {
            return length
        }

        this.getHead = function () {
            return head
        }
    }

    var table = []
    var loseloseHashCode = function (key) {
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key[i].charCodeAt()
        }
        return hash % 37
    }

    var Node = function (key, value) {
        this.key = key
        this.value = value
    }

    this.put = function (key, value) {
        var position = loseloseHashCode(key)
        if (table[position]) {
            table[position].append(new Node(key, value))
        } else {
            var L = new likedList
            table[position] = L
            table[position].append(new Node(key, value))
        }
    }
    this.get = function (key) {
        var position = loseloseHashCode(key)
        //链表线性检查
        if (table[position]) {
            var current = table[position].getHead()
            while (current) {
                if (current.element.key == key) {
                    return current.element.value
                }
                current = current.next
            }
        } else {
            return undefined
        }
    }

    //删除
    this.remove = function (key) {
        var position = loseloseHashCode(key)
        if (table[position]) {
            var current = table[position].getHead()
            while (current) {
                if (current.element.key == key) {
                    table[position].remove(current.element)
                    if (table[position].isEmpty()) {
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }

        } else {
            return false
        }
    }

    this.getTable = function () {
        return table
    }
}


//线性探查
var HashCode_X = function () {
    var table = []
    var loseloseHashCode = function (key) {
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key[i].charCodeAt()
        }
        return hash % 37
    }

    var Node = function (key, value) {
        this.key = key
        this.value = value
    }

    this.put = function (key, value) {
        var position = loseloseHashCode(key)
        if (table[position] == undefined) {
            table[position] = new Node(key, value)
        } else {
            var index = position + 1
            while (table[position] !== undefined) {
                index++
            }
            table[index] = new Node(key, value)
        }
    }
    this.get = function (key) { }
    this.remove = function (key) { }
}