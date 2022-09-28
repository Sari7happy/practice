$(function(){
    // /function実行するよのサイン/ 
    const MSG_TEXT_MAX = '20文字以内で入力してください。';
    const MSG_EMPTY = '入力必須です。';
    const MSG_EMIL_TYPE = 'emailの形式ではありません。';
    const MSG_TEXTAREA_MAX = '100文字以内で入力してください。';
    // 定数は大文字でかくエラーメッセージの内容

// 名前エリア
    $(".valid-text").keyup(function(){
        // クラスがvalid-textのもの

    var form_g = $(this).closest('.form-group');
    // thisは名前フォームを指すclosest親の名前form-groupを指す

    if($(this) .val().length > 20){
        // lengthは文字の長さ
        form_g.removeClass('has-success').addClass('has-error');
        // ewmoveclassは削除、addclassは追加
        form_g.find('.help-block').text(MSG_TEXT_MAX);
        // help-blockを探す、textを書き換えれるconstの中身を表示するMSG _TEXT _MAX
    }else{
        form_g.removeClass('has-error').addClass('has-success');
        form_g.find('.help-block').text('');
    }

});

// EMAILエリア
$(".valid-email").keyup(function(){

    var form_g = $(this) .closest('.form-group');

    if($(this).val().length === 0 ){
        form_g.removeClass('has-success').addClass('has-error');
        form_g.find('.help-block').text(MSG_EMPTY);

    }else if($(this).val().length >50 || !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
        form_g.removeClass('has-success').addClass('has-error');
        form_g.find('.help-block').text(MSG_EMIL_TYPE);

}else{
        form_g.removeClass('has-error').addClass('has-success');
        form_g.find('.help-block').text('');
    }
});

// テキストエリア
$(".valid-textarea").keyup(function(){

    var form_g = $(this).closest('.form-group');

    if($(this).val().length === 0){
        form_g.removeClass('has-success').addClass('has-error');
        form_g.find('.help-block').text(MSG_EMPTY);

}else if($(this).val().length > 100){
    form_g.removeClass('has-success').addClass('has-error');
    form_g.find('.help-block').text(MSG_TEXTAREA_MAX);

}else{
    form_g.removeClass('has-error').addClass('has-success');
    form_g.find('.help-block').text('');
    }
});

});