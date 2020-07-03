(function ( $ ) {
 
    $.fn.listWithoutIcon = function( options ) {
 
        // Default options
        var settings = $.extend([{}], options );
 
        // Apply options
        let listArrayFirst = '<ul><li class="firstli">&nbsp;</li>';
        let listArraySecond = '<li class="child1 active dis-flex '+ settings[0].label +'"><div class="txt-head"><span class="pad-lf-8">'+ settings[0].label +'</span></div></li>'
        let listArrayLast = ' <li class="empty">&nbsp;</li></ul>';
        let listArray = '';
        $.each(settings, function(key, item) 
        {
            if(key != 0)
            listArray = listArray + '<li class="child '+ item.class +'"><div class="txt-head"><span class="pad-lf-8">'+ item.label +'</span></div></li>';     
        });

        return this.append('' + listArrayFirst + '' + listArraySecond +''+ listArray +''+ listArrayLast);
        
    };

    $.fn.listWithIcon = function( options ) {
 
        // Default options
        var settings = $.extend([{}], options );
 
        // Apply options
        let listArrayFirst = '<ul><li class="firstli">&nbsp;</li>';
        let listArraySecond = '<li class="child1 active dis-flex '+ settings[0].liclass +'">';
        listArraySecond+'<div class="menu-content2"><img class="'+settings[0].imgclass+'" src="'+settings[0].url+'"></div>';
        listArraySecond+'<div class="txt-head"><span class="pad-lf-8">'+ settings[0].label +'</span></div></li>';
        let listArrayLast = ' <li class="empty">&nbsp;</li></ul>';
        let listArray = '';
        $.each(settings, function(key, item) 
        {
            if(key != 0)
            listArray = listArray + '<li class="child '+ item.liclass +'">';
            listArray = listArray+'<div class="menu-content2"><img class="'+item.imgclass+'" src="'+item.url+'"></div>';
            listArray = listArray+'<div class="txt-head"><span class="pad-lf-8">'+ item.label +'</span></div></li>';
        });

        return this.append('' + listArrayFirst + '' + listArraySecond +''+ listArray +''+ listArrayLast);
        
    };

    $.fn.radioListWithOutIcon = function( options,listName ) {
 
        // Default options
        var settings = $.extend([{}], options );
 
        // Apply options
        
        let listArrayFirst = '<ul  class="optionli-color-child check-box-list-'+listName+'"><li>&nbsp;</li>';
        let listArraySecond = '<li class="child1 cur-point active dis-flex "><div class="option-content">'+settings[0].label+'</div><div class="option-content2  option-function"><input id="trigger-color1" class="checkbox" type="checkbox" value="'+settings[0].value+'" checked="checked"><label for="trigger-color1" class="trigger-label"></label></div></li>';
        let listArrayLast = ' <li>&nbsp;</li></ul>';
        let listArray = '';
        $.each(settings, function(key, item) 
        {
            if(key != 0)
            listArray = listArray + '<li class="child cur-point dis-flex"><div class="option-content">'+item.label+'</div><div class="option-content2  option-function"><input id="trigger-color'+ (key+1) +'" class="checkbox" type="checkbox" value="'+item.value+'"><label for="trigger-color'+ (key+1) +'" class="trigger-label"></label></div></li>';
        });

        return this.append('' + listArrayFirst + '' + listArraySecond +''+ listArray +''+ listArrayLast);
        
    };
 
}( jQuery ));