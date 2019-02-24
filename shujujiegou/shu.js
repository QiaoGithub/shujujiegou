var Tree = function () {
    var Node = function (node) {
        this.value = node
        this.left = null
        this.right = null
    }

    var root = null

    //插入节点
    var inserNode = function (node, newNode) {
        if (newNode.value > node.value) {
            //往右走
            if (node.right == null) {
                node.right = newNode
            } else {
                inserNode(node.right, newNode)
            }
        } else if (newNode.value < node.value) {
            //往左走
            if (node.left == null) {
                node.left = newNode
            } else {
                inserNode(node.left, newNode)
            }
        }
    }
    this.insert = function (value) {
        var newNode = new Node(value)
        if (root == null) {
            root = newNode
        } else {
            inserNode(root, newNode)
        }
    }

    //遍历节点
    var traverse = function (node, callback) {
        if (node == null) return
        // callback(node.value)    8 2 3 9  前序遍历
        traverse(node.left, callback)
        // callback(node.value)    2 3 8 9  中序遍历
        traverse(node.right, callback)
        // callback(node.value)    3 2 9 8  后序遍历
    }
    this.traverse = function (callback) {
        traverse(root, callback)
    }

    //获取最小值
    var min = function (node) {
        if (node == null) return null

        while (node && node.left) {
            node = node.left
        }
        console.log(node)
    }
    this.min = function () {
        return min(root)
    }

    //获取最大值
    var max = function (node) {
        if (node == null) return null

        while (node && node.right) {
            node = node.right
        }
        console.log(node)
    }
    this.max = function () {
        return max(root)
    }

    //删除节点
    var findMinNode = function (node) {
        if (node == null) return null
        while (node && node.left) {
            node = node.left
        }
        return node
    }

    var removeNode = function (node, value) {
        if (node == null) return null
        if (node.value < value) {
            //继续向右查找
            node.right = removeNode(node.right, value)
            return node
        } else if (value < node.value) {
            //继续向左查找
            node.left = removeNode(node.left, value)
            return node
        } else {
            //执行删除过程
            if (node.left == null && node.right == null) {
                //叶节点条件
                node = null
                return node
            }
            //只有一个子节点条件
            if (node.left == null && node.right) {
                return node.right
            } else if (node.right == null && node.left) {
                return node.left
            }

            //有两个子节点的条件
            var aux = findMinNode(node.right)  //查找到最小的子节点
            node.value = aux.value
            node.right = removeNode(node.right, aux.value)
            return node
        }
    }
    this.remove = function (value) {
        root = removeNode(root, value)
    }


    this.getRoot = function () {
        return root
    }
}
var t = new Tree()
t.insert(11)
t.insert(8)
t.insert(4)
t.insert(9)
t.insert(3)
t.insert(5)
t.insert(10)

var prinft = function (value) {
    console.log('value -', value)
}
t.traverse(prinft)





