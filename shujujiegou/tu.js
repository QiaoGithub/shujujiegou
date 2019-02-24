//基本思路：每一个节点都有三种状态
//未发现 尚未发现此节点
//已经发现 （发现其他节点连接到此，但为查找节点全部连接的节点）
//已经探索 （已经发现此节点连接的全部节点）

//横向遍历  广度优先
//纵向遍历  深度优先
var Stack = function () {
    var items = []  //私有的


    //push 栈顶添加元素
    this.push = function (e) {
        items.push(e)
    }

    //pop栈顶移除元素
    this.pop = function () {
        items.pop()
    }

    //peek查看栈顶元素
    this.peek = function () {
        return items[items.length - 1]
    }

    //检查栈是否为空
    this.isEmpty = function () {
        return items.length == 0
    }

    //清空栈
    this.clear = function () {
        items = []
    }

    //获取栈的大小
    this.size = function () {
        return items.length
    }

    //检查items
    this.getItems = function () {
        return items
    }
}
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



var Graph = function () {
    //存储顶点
    var vertices = []
    //存储边
    var adjList = {}

    //添加顶点
    this.addVertex = function (v) {
        vertices.push(v)
        adjList[v] = []
    }

    //添加边
    this.addEdg = function (a, b) {
        adjList[a].push(b)
        adjList[b].push(a)
    }

    this.print = function () {
        var s = '\n'
        for (var i = 0; i < vertices.length; i++) {
            var dingdian = vertices[i]
            s += dingdian + '=>'
            var bian = adjList[dingdian]
            for (var j = 0; j < bian.length; j++) {
                s += bian[j] + ' '
            }
            s += '\n'
        }
        console.log(s)
    }

    //white 未发现
    //grey 已发现未探索
    //black 已探索
    var initColor = function () {
        var color = {}
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white'
        }
        return color
    }
    //广度优先算法
    // v='A'
    this.bfs = function (v, callback) {
        var color = initColor()
        /**
         * color={
         *  A:'white',
         *  B:'white',
         *  ...
         * }
         */
        var queue = new Queue()
        queue.enqeueu(v)

        var d = {}
        var pred = {}

        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0
            pred[vertices[i]] = null
        }

        while (!queue.isEmpty()) {
            var now = queue.deqeueu()
            var bian = adjList[now]
            for (var i = 0; i < bian.length; i++) {
                var w = bian[i]
                if (color[w] === 'white') {
                    //未发现的全部入列，并且标识为已发现
                    color[w] = 'grey'

                    //设置回溯点
                    pred[w] = now
                    d[w] = d[now] + 1

                    queue.enqeueu(w)
                }
            }
            color[now] = 'black'
            if (callback) {
                callback(now)
            }
        }
        return {
            pred: pred,
            d: d
        }
    }
    var dfsVisite = function (u, color, callback) {
        color[u] = 'grey'
        var n = adjList[u]
        for (var i = 0; i < n.length; i++) {
            var w = n[i]
            if (color[w] == 'white') {
                dfsVisite(w, color, callback)
            }
        }
        color[u] = 'black'

        if (callback) {
            callback(u)
        }
    }
    this.dfs = function (v, callback) {
        var color = initColor()
        dfsVisite(v, color, callback)
    }
}



var g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdg('A', 'B')
g.addEdg('A', 'D')
g.addEdg('A', 'C')
g.addEdg('D', 'C')
g.addEdg('B', 'E')
g.addEdg('B', 'F')
//添加新的路径
// g.addEdg('D', 'F')


//广度优先算法 能解决 保证每个点的回溯点是 最近的
var s = g.bfs('A')
console.log(s)
var zuiduan = function (from, to) {
    var v = to  //设置当前点
    var path = new Stack()
    while (v !== from) {
        path.push(v)
        v = s.pred[v]
    }
    path.push(v)

    var str = ''
    while (!path.isEmpty()) {
        str += path.pop() + '-'
    }
    str = str.slice(0, str.length - 1)
    console.log(str)
}

zuiduan('A','F')