var List = function () {
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
    this.insert=function(position,element){
        //越界
        if(position > -1 && position < length){
            var node = new Node(element)
            if(position == 0){
                var current = head
                head = node
                head.next = current 
            } else{
                var index=0
                var previous=null
                var current = head
                while(index < position){
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
    this.removeAt=function(position){
        //越界
        if(position > -1 && position < length){
            if(position ==0){
                var current = head
                head = current.next
            }else{
                var current=head
                var index = 0
                var previous = null
                while(index < position){
                    previous = current
                    current = current.next
                    index++ 
                }
                previous.next=current.next
            }
            length--
            return current
        }
        return null
    }

    //查找聊表元素位置
    this.indexOf=function(element){
        var current = head
        var index = 0
        while(current){
            if(element === current.element){
                return index
            }
            index ++
            current = current.next
        }
        return -1
    }
    
    this.remove = function(element){
        return this.removeAt(this.indexOf(element))
    }


    this.isEmpty=function(){
        return length==0
    }

    this.size=function(){
        return length
    }

    this.getHead=function(){
        return head
    }
}

var L = new List()
L.append(1)
L.append(2)
L.append(3)
L.insert(1,10)