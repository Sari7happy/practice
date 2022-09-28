$(function(){
    $(".format-number").change(function(){
        // マウスが外れた時の動き

        var format_before =$(this).val();
        // フォーマットに入力したら
        format_before = format_before.replace(/-/g,'');
    // replaceは置き換える

        var format_after =format_before.replace(/[A-Za-z0-9]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0) });
// 半角にする動き
            if(format_after.length === 11){
                // 11文字かどうか
                $(this).val(format_after.substr(0,3)+'-'+format_after.substr(3,4)+'-'+format_after.substr(7,4));
            // substrは何文字取得するか0から３文字目090-みたいな
            }else{
                $(this).val(format_after);
            }
        
    });
    
    
    
    
});