var BeautifullMath = function() {
    var obj = [], xm = 0, ym = 0, axe = 0, aye = 0, parts = 500, scr, txe, tye, nw, nh;
    var addEvent = function(o, e, f) {
        window.addEventListener ? o.addEventListener(e, f, false) : o.attachEvent('on' + e, function() {
            f.call(e)
        })
    }
    var resize = function() {
        nw = scr.offsetWidth * .5;
        nh = scr.offsetHeight * .5;
    }
    var init = function(n, f) {
        if (!!n)
            parts = n;
        scr = document.getElementById('screen');
        addEvent(document, 'mousemove', function(e) {
            e = e || window.event;
            xm = e.clientX;
            ym = e.clientY;
        });
        resize();
        addEvent(window, 'resize', resize);
        __init(f);
        setInterval(run, 16);
    }
    var __init = function(f) {
        for (var i = 0; i < parts; i++) {
            var o = {};
            o.p = document.createElement('span');
            scr.appendChild(o.p);
            var r = i / parts, j, a, b;
            j = i % (parts * .5);
            a = Math.floor(j) / 200 + (Math.floor(j / 2) % 10) / 5 * Math.PI * 2;
            b = Math.acos(-0.9 + (j % 4) * 0.6);
            r = !!f ? f(r) : r - r * r + .5;
            var sbr = Math.sin(b) * r;
            o.x = Math.sin(a) * sbr;
            o.y = Math.cos(a) * sbr;
            o.z = Math.cos(b) * r;
            obj.push(o);
            o.transform = function() {
                var ax = .02 * txe
                  , ay = .02 * tye
                  , cx = Math.cos(ax)
                  , sx = Math.sin(ax)
                  , cy = Math.cos(ay)
                  , sy = Math.sin(ay);
                //rotation  
                var z = this.y * sx + this.z * cx;
                this.y = this.y * cx + this.z * -sx;
                this.z = this.x * -sy + z * cy;
                this.x = this.x * cy + z * sy;
                //3d  
                var scale = 1 / (1 + this.z)
                  , x = this.x * scale * nh + nw - scale * 2
                  , y = this.y * scale * nh + nh - scale * 2;
                //set style  
                var p = this.p.style;
                if (x >= 0 && y >= 0 && x < nw * 2 && y < nh * 2) {
                    var c = Math.round(256 + (-this.z * 256));
                    p.left = Math.round(x) + 'px';
                    p.top = Math.round(y) + 'px';
                    p.width = Math.round(scale * 2) + 'px';
                    p.height = Math.round(scale * 2) + 'px';
                    p.background = 'rgb('.concat((c), ',', (c), ',', (1024 - c), ')');
                    p.zIndex = 200 + Math.floor(-this.z * 100);
                } else
                    p.width = "0px";
            }
        }
    }
    //run function   
    var run = function() {
        var se = 1 / nh;
        txe = (ym - axe) * se;
        tye = (xm - aye) * se;
        axe += txe;
        aye += tye;
        /* ---- anim particles ---- */
        for (var i = 0, o; o = obj[i]; i++)
            o.transform();
    }
    return {
        init: init
    }
}();
onload = function() {
    BeautifullMath.init();
}
