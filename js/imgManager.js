const imgCont = document.getElementsByClassName('gallery-show');
//var folder = "tree/main/img/asociadas";
var folder = "web/img/asociadas";
//var folder = "img/asociadas";
var images = [];
var n = 0;
var i = 0;

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                //$("body").append( "<img src='" + val +"'>" );
                images[n] = val;
                n++;
            } 
        });
        i = Math.floor(Math.random() * n);
        $(".gallery-show").attr("src",images[i]);
        Tick();
        console.debug(images[0]);
    }
});

Tick = function() {

    $(".gallery-show").fadeTo(1000,0, function() {
        $(".gallery-show").attr("src",images[i]);
    }).fadeTo(1000,1);

    ++i;
    if(i===n){
        i = 0;
    }

    setTimeout(function() {
        Tick();
    }, 4000);
};