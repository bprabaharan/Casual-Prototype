var all_screen_objects = 
{ "Menu-Page" : 
    [
        {   
            sectionOrder: 1,
            sectionClass:"Menu-Section",
            listType:"listWithIcon",
            animType:"RTL",
            listItems: [{label:"Info", liclass:"",imgclass:"",url:"./images/Icons_SVG/u17.png"},
                        {label:"Status", liclass:"",imgclass:"",url:"./images/Icons_SVG/u17.png"},
                        {label:"Supplies", liclass:"",imgclass:"",url:"./images/Icons_SVG/u17.png"},
                        {label:"Settings", liclass:"Menu-Settings",imgclass:"",url:"./images/Icons_SVG/u17.png"},
                        {label:"Tools", liclass:"",imgclass:"",url:"./images/Icons_SVG/u17.png"},
                        {label:"Help", liclass:"",imgclass:"",url:"./images/Icons_SVG/u17.png"}
                    ]
        },
        {   
            sectionOrder: 2,
            sectionClass:"Menu-Settings",
            listType:"listWithoutIcon",
            animType:"RTL",
            listItems: [{label:"General", liclass:""},
                        {label:"Network", liclass:"Menu-Section-Network"},
                        {label:"Printer update", liclass:""}
                    ]
        },
        {   
            sectionOrder: 3,
            sectionClass:"Menu-Section-Network",
            listType:"listWithIcon",
            animType:"RTL",
            listItems: [{label:"WiFi", liclass:"Menu-Section-WiFi PV",imgclass:"",url:"./images/Icons_SVG/u17.png"},
                        {label:"Bluetooth", liclass:"Menu-Section-Blutooth PV",imgclass:"",url:"./images/Icons_SVG/u17.png"},
                        {label:"Tools", liclass:"",imgclass:"",url:"./images/Icons_SVG/u17.png"},
                        {label:"Help", liclass:"",imgclass:"",url:"./images/Icons_SVG/u17.png"}
                    ]
        },
        {   
            sectionOrder: 4,
            sectionClass:"Menu-Section-WiFi",
            listType:"listWithPropertyValue",
            animType:"PV",
            listItems: [{labelProperty:"WiFi Direct", labelValue:"ON", liclass:""},
                        {labelProperty:"Connection", labelValue:"Automatic", liclass:""},
                        {labelProperty:"Help", labelValue:"Automatic", liclass:""}
                    ]
        },
        {   
            sectionOrder: 4,
            sectionClass:"Menu-Section-Blutooth",
            listType:"listWithPropertyValue",
            animType:"PV",
            listItems: [
                        {labelProperty:"Bluetooth", labelValue:"OFF", liclass:""},
                        {labelProperty:"Connection", labelValue:"Automatic", liclass:""},
                        {labelProperty:"Help", labelValue:"Automatic", liclass:""}
                    ]
        },
        {   
            sectionOrder: 5,
            sectionClass:"option-WiFi-Direct",
            listType:"radioListWithOutIcon",
            animType:"PV",
            listItems: [{labelProperty:"Automatic", labelValue:"Automatic"} ,{labelProperty:"Manual", labelValue:"Manual"}]
        }
        


]

}

$(".carousel-item").click(function (event) {
    var $this = $(this);
    var pageObj = all_screen_objects[$this[0].classList[1]];
    createPageDom(pageObj);
    setTimeout(function () {
        console.log($(this).hasClass("active"));
            if (activScreen_history.indexOf("." + pageObj[0].sectionClass + "-page") === -1) {
                        activScreen_history.push("." + pageObj[0].sectionClass + "-page");
                    }
                    $backBtn.css({opacity: "1", cursor:"pointer"});
                    $(".Menu-Page").animate({ left: '-180px' }, { opacity: '0' }).hide(300);
                    $(".Smarttask-Page").animate({ zoom: '.5' }, { opacity: '0' }).hide(300);
                    $(".copy-page").animate({ zoom: '.5' }, { opacity: '0' }).hide(300);
                    setTimeout(function () {
                        $hiLightCopy.animate({ width: "658px" }, 600);
                        $("." + pageObj[0].sectionClass + "-page").css("display", "block").addClass("anim-txt");
                        $(".Landing-Page").show(10);
                        $(".Landing-Page .Main-content").show();
                        $(".Main-content .Print-content-container").show();
                        $(".Landing-Page .Print-content-landing").hide();
                        setTimeout(historyActiveScreen(""), 100);
                    }, 300);
                // }
    }, 300);

});


$(document).on("click", ".list-item", function(event) {
    var $this = $(this);
    console.log($this[0].classList);
    var pv = jQuery.inArray("PV", $this[0].classList);
    console.log(pv);
    if (activScreen_history.indexOf("." + $this[0].classList[1] + "-page") === -1) {
        activScreen_history.push("." + $this[0].classList[1] + "-page");
    }
   
   
    $(activScreen_history[activScreen_history.length - 2]).removeClass('anim-txt').addClass('anim-re-left-right').hide(100);
    if(pv == 2){
        $(".Print-content-container "+activScreen_history[activScreen_history.length - 1]+"").show(200);
        // $(""+activScreen_history[activScreen_history.length - 1]+"").removeClass('transitionLR-reload');
        // $(""+activScreen_history[activScreen_history.length - 1]+" .option-content").removeClass('transitionLR-reload');
        $(""+activScreen_history[activScreen_history.length - 1]+" .option-content").show(300);
        $(""+activScreen_history[activScreen_history.length - 1]+" .option-function").show(300);
        // historyActiveScreen("");
        // onScreenEntryOptions();
        $(""+activScreen_history[activScreen_history.length - 1]+" .option-content").animate({ marginLeft: "0px" }, 600);
        setTimeout(function () {
            $(""+activScreen_history[activScreen_history.length - 1]+" .option-function").css({ opacity: "1" });
            $(""+activScreen_history[activScreen_history.length - 1]+" .option-content").css({ opacity: "1" });
        }, 600);
        // setTimeout(function () {
        //     $(""+activScreen_history[activScreen_history.length - 1]+" .option-function").show(300);
        //     $(""+activScreen_history[activScreen_history.length - 1]+" .option-function").css({ opacity: "1", visibility: "visible" }, 400);
        // }, 600);
        // $scrollspy.css({ width: "696px" });
    } else {
        $("." + $this[0].classList[1] + "-page .child1").addClass("active").css("margin-top", "0px");
        $("." + $this[0].classList[1] + "-page").addClass('anim-txt').show(00).css('opacity', '1');
        
    }
   
    historyActiveScreen();
  });

function createPageDom(pageObj){
    $.each(pageObj, function (i) {
        let dom = '<div class="' + pageObj[i].sectionClass + '-page Copy-Content dis-flex overflow-auto">';
       dom = dom + '<div class="' + pageObj[i].sectionClass + '-content" id="' + pageObj[i].sectionClass + '"> </div></div>"';
       $(".Print-content-container .scrollspy").append(dom);
    });
    setTimeout(function () {
        $.each(pageObj, function (i) {
            let component = pageObj[i].listType;
            if(component === "listWithIcon") {
                $('#' + pageObj[i].sectionClass + '').listWithIcon(pageObj[i].listItems);
            } else if(component === "listWithoutIcon") {
                $('#' + pageObj[i].sectionClass + '').listWithoutIcon(pageObj[i].listItems);
            } else if (component === "listWithPropertyValue") {
                $('#' + pageObj[i].sectionClass + '').listWithPropertyValue(pageObj[i].listItems);
            } else if (component === "radioListWithOutIcon") {
                $('#' + pageObj[i].sectionClass + '').radioListWithOutIcon(pageObj[i].listItems, 'wifiConnectMethod');
            }
            $("." + pageObj[i].sectionClass + "-page").hide();
        });
    }, 100);
    
   
}


