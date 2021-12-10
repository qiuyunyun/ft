//悬浮球
var assistiveLeft, assistiveRight, timerid, assistiveBottom;
var windowHeight = document.documentElement.clientHeight;
var mydate;
var stickEdge = function(el) {
    var right = parseInt(el.style.right) || 0,
        bottom = parseInt(el.style.bottom) || 0,
        width = parseInt(el.offsetWidth) || 0,
        windowWith = (document.documentElement || document.body).offsetWidth;

    if (right > (windowWith - width) / 2) {
        right = windowWith - width - 2;
    } else {
        right = 0;
    }

    el.style.transition = 'all .2s';
    el.style['-webkit-transition'] = 'all .2s';
    el.style.right = right + 'px';
    //timerid = setTimeout(function () {
    //    el.style.transition = 'all .5s';
    //    el.style['-webkit-transition'] = 'all .5s';
    //    el.style.opacity = '.6';
    //}, 1000);
};

mTouch('.assistive-wrap').on('swipestart', function() {
        clearTimeout(timerid);
        this.style.transition = 'none';
        this.style['-webkit-transition'] = 'none';
        this.style.opacity = '1';

        assistiveRight = parseInt(this.style.right) || 0;
        assistiveBottom = parseInt(this.style.bottom) || 0;

        return false;
    })
    .on('tap', function(e) {
        $('.fixzz').show();
        $('.fixmenu').show();
    })
    .on('swiping', function(e) {
        this.style.right = assistiveRight - e.mTouchEvent.moveX + 'px';
        this.style.bottom = assistiveBottom - e.mTouchEvent.moveY + 'px';
    })
    .on('swipeend', function() {
        var endBottom = parseInt(this.style.bottom) || 0;
        if (endBottom < 0) this.style.bottom = '0px';
        if (endBottom > windowHeight - 58) this.style.bottom = windowHeight - 58 + 'px';
        this.style.transition = 'all 1.5s';
        this.style['-webkit-transition'] = 'all 1.5s';
        this.style.opacity = '.6';
        stickEdge(this);

    });
mTouch('.fixzz').on('tap', function() {
    $('.fixzz').hide();
    $('.fixmenu').hide();
})