window.addEventListener('DOMContentLoaded',
    function() {
var node = document.getElementById('count-text');
node.addEventListener('keyup',function(){
        var count = this.value.length;
        var counterNode = document.querySelector('.show-count-text');
        counterNode.innerText = count;

        },false);
    },false
);

// 大文字小文字気をつける。