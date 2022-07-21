(function($){


var galery = $('.galery'), 
    galerySet = galery.find('div');


galerySet.hide()
// galerySet.eq(0).show()

var li = $('li').eq(0)
    li.addClass('selected')

$('a').on('click',function(){
    var li = $(this).parent();
    li.addClass('selected')
    .siblings().removeClass('selected');
    console.log(li);
    showGallery(li);

    
})

var selected = $('.nav_bar').find('.selected');

function showGallery (selected){
    console.log(selected);
    if ( selected.length ) {
        var id = selected.find('a').attr('href');
        $(id).show().siblings().hide(); 

    }
}

showGallery(selected);

})(jQuery);