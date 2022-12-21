

$(".copy").hide();

$("button").click(function(){
    $(".copy").show();
});

$(".copy-btn").click(function(){
    $("#text-field").select();
    document.execCommand('copy');
    add();
        });
