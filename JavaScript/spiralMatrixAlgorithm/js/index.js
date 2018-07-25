 (function() {
    var map = (function() {
        function map(n) {
            console.log(this);
            this.map = [], this.row = 0, this.col = -1, this.dir = 0, this.n = n;
            // 建立个二维数组
            for (var i = 0; i < this.n; i++) { this.map.push([]); }
            // 定义移动的顺序为 右，下，左，上
            var order = [this.right, this.bottom, this.left, this.up];
            i = 0;
            do {
                // 能移动则更新数字，否则更改方向
                order[this.dir % 4].call(this) ? i++ : this.dir++;
                // 赋值
                this.map[this.row][this.col] = i;
            } while (i < n * n);
        }
        map.prototype = {
            print: function() { for (var i = 0; i < this.n; i++) { console.log(this.map[i].join(' ')) } },
            // 向该方向移动
            left: function() { return this.move(this.row, this.col - 1); },
            right: function() { return this.move(this.row, this.col + 1); },
            up: function() { return this.move(this.row - 1, this.col); },
            bottom: function() { return this.move(this.row + 1, this.col); },
            // 如果坐标在范围内，并且目标没有值，条件满足则更新坐标
            move: function(row, col) {
                return (0 <= row && row < this.n) && (0 <= col && col < this.n) && !this.map[row][col] && (this.row = row, this.col = col, true);
            },
        };
    })();
    return map;
    //new map(6).print();
})();