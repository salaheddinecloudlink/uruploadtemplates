$(document).ready(function () {


    // For Apple Phone
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iPad|iPhone|iPod)/i);
    if (agentID) {
        $('body').css('-webkit-overflow-scrolling', 'touch');
    }
    // Music Play
    var myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jplayer_N",
        cssSelectorAncestor: "#jp_container_N"
    }, [{
        title: "Sun raha hai na tu",
        artist: "ADG3",
        mp3: "./js/jPlayer/sunrahahai.mp3",
        poster: "images/m0.jpg"
    }, {
        title: "Shubhaarambh Knuckles",
        artist: "3studios",
        mp3: "./js/jPlayer/shubhaarambh.mp3",
        poster: "images/m0.jpg"
    }, {
        title: "Sun raha hai na tu",
        artist: "ADG3",
        mp3: "./js/jPlayer/sunrahahai.mp3",
        poster: "images/m0.jpg"
    }, {
        title: "Shubhaarambh Knuckles",
        artist: "3studios",
        mp3: "./js/jPlayer/shubhaarambh.mp3",
        poster: "images/m0.jpg"
    }, {
        title: "Cryptic Psyche",
        artist: "ADG3",
        mp3: "http://flatfull.com/themes/assets/musics/adg3com_crypticpsyche.mp3",
        poster: "images/m0.jpg"
    }, {
        title: "Electro Freak",
        artist: "Studios",
        mp3: "http://flatfull.com/themes/assets/musics/adg3com_electrofreak.mp3",
        poster: "images/m0.jpg"
    }, {
        title: "Freeform",
        artist: "ADG",
        mp3: "http://flatfull.com/themes/assets/musics/adg3com_freeform.mp3",
        poster: "images/m0.jpg"
    }], {
        playlistOptions: {
            enableRemoveControls: true,
            autoPlay: true
        },
        swfPath: "js/jPlayer",
        supplied: "webmv, ogv, m4v, oga, mp3",
        smoothPlayBar: true,
        keyEnabled: true,
        audioFullScreen: false
    });

    $(document).on($.jPlayer.event.pause, myPlaylist.cssSelector.jPlayer, function () {
        $('.musicbar').removeClass('animate');
        $('.jp-play-me').removeClass('active');
        $('.jp-play-me').parent('li').removeClass('active');
    });

    $(document).on($.jPlayer.event.play, myPlaylist.cssSelector.jPlayer, function () {
        $('.musicbar').addClass('animate');
    });

    $(document).on('click', '.jp-play-me', function (e) {
        e && e.preventDefault();
        var $this = $(e.target);
        if (!$this.is('a')) $this = $this.closest('a');

        $('.jp-play-me').not($this).removeClass('active');
        $('.jp-play-me').parent('li').not($this.parent('li')).removeClass('active');

        $this.toggleClass('active');
        $this.parent('li').toggleClass('active');
        if (!$this.hasClass('active')) {
            myPlaylist.pause();
        } else {
            var i = Math.floor(Math.random() * (1 + 7 - 1));
            myPlaylist.play(i);
        }

    });



    // video

    $("#jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Big Buck Bunny",
                m4v: "video/the_fray_m.m4v",
                ogv: "video/the_fray_o.ogv",
                webmv: "video/the_fray_w.webm",
                poster: "images/m41.jpg"
            });
        },
        swfPath: "js",
        supplied: "webmv, ogv, m4v",
        size: {
            width: "100%",
            height: "400",
            cssClass: "jp-video-360p"
        },
        globalVolume: true,
        smoothPlayBar: true,
        keyEnabled: true
    });

    // Forget Password
    $('.content_for_reset').hide();
    $('#forget').click(function () {
        $('.content_for_reset').show();
        $('.content_for_login').hide();

    });
    //========= Sticky Header  ============
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1) {
            $('.mainmenu-area1').addClass("sticky");
        } else {
            $('.mainmenu-area1').removeClass("sticky");
        }
    });

    // Artist Carousel
    $('.artist_list').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 4
            },
            1400: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    });
    // Home slider
    $('.home_slide').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        items: 1,
        animateIn: 'fadeIn ',
        animateOut: 'fadeOut',
    });
    // Album Carousel
    $('#popular-album').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 4
            },
            1400: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    });
    $('.album_list').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })



    //Feature Artist Carousel
    $('.feature_artist_list').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 15,
        items: 1,
        animateIn: 'fadeIn ',
        animateOut: 'fadeOut',
    });

    //Featured  Carousel
    $('.all_feature_list').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 15,
        items: 1,
        animateIn: 'fadeIn ',
        animateOut: 'fadeOut',
    });

    //Feature Event Carousel
    $('.feature_event_list').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 15,
        items: 1,
        animateIn: 'fadeIn ',
        animateOut: 'fadeOut',
    });

    //Feature Video Carousel
    $('.featured_video_list').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 15,
        items: 1,
        animateIn: 'fadeIn ',
        animateOut: 'fadeOut',
    });
    $('.feature_album_list').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        items: 1,
        margin: 15,
        animateIn: 'fadeIn ',
        animateOut: 'fadeOut',
    });
    //Simmiler  Carousel
    $('.similar_event_list').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 15,
        items: 1,
        animateIn: 'fadeIn ',
        animateOut: 'fadeOut',
    });
    //Feature Music Carousel
    $('.music_list').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 15,
        items: 1,
        animateIn: 'fadeIn ',
        animateOut: 'fadeOut',
    });

    //Beaking News Carousel
    $('.breking_news_list').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        margin: 15,
        autoplayHoverPause: false,
        items: 1,
        animateIn: 'fadeIn ',
        animateOut: 'fadeOut',
    });

    // Map show hide event page
    $('#map_hide').hide();
    $('#map_open').click(function () {
        $('.journy').slideUp();
        $('.event_location').css('opacity', '1');
        $('#map_open').hide();
        $('#map_hide').show();

    });
    $('#map_hide').click(function () {
        $('.journy').slideDown();
        $('.event_location').css('opacity', '0');
        $('#map_open').show();
        $('#map_hide').hide();

    });
    'use strict';




    // PAGE TRANSITIONS
    // ---------------------------------
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 800,
        outDuration: 500,
        // linkElement           :   '.animsition-link',
        linkElement: 'a:not([target="_blank"]):not([href^=#]):not([data-rel*="lightcase"]):not([class*="no-redirect"])',
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        unSupportCss: ['animation-duration',
            '-webkit-animation-duration',
            '-o-animation-duration'
        ],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body'
    });


    // JUSTIFIED GALLERY
    $('.justified').each(function () {
        var e = $(this);


        function collage() {
            e.imagesLoaded(function () {
                e.removeWhitespace().collagePlus({
                    'targetHeight': 400,
                    'effect': 'effect-2',
                    'allowPartialLastRow': true
                });
            });
        }
        collage();
        var resizeTimer = null;
        $(window).bind('resize', function () {
            $('.justified a').css("opacity", 0);
            if (resizeTimer) clearTimeout(resizeTimer);
            resizeTimer = setTimeout(collage, 200);
        });
    });


    // BACKGROUNDS
    $('[data-background]').each(function () {
        var bg = $(this).attr('data-background');
        if (bg.match('^rgb') || bg.match('^#')) {
            $(this).css('background-color', bg);
        } else {
            $(this).css('background-image', 'url(' + bg + ')');
        }
    });



    // GRID
    // --------------------------------
    $('.grid').each(function () {
        var $grid = $(this),
            $item = $grid.children('.grid-item'),
            $itemWide = $grid.children('.grid-item.wide'),
            $itemTall = $grid.children('.grid-item.tall'),
            $cols = $grid.data('columns'),
            $cols = $cols != undefined ? $cols : 3,
            $gutter = $grid.data('gutter'),
            $gutter = $gutter != undefined ? $gutter / 2 : 0;

        // spaces between items
        $grid.wrap("<div class='grid-wrapper' />");
        $grid.css({
            'margin-left': -$gutter + 'px',
            'margin-right': -$gutter + 'px',
            'margin-top': -$gutter + 'px',
            'margin-bottom': -$gutter + 'px'
        });
        $item.wrapInner("<div class='grid-item-inner' />");
        $grid.find('.grid-item-inner').css({
            'position': 'absolute',
            'top': $gutter,
            'bottom': $gutter,
            'left': $gutter,
            'right': $gutter,
        });

        function itemSizes() {
            $item.width($grid.width() / $cols);
            $item.height($item.width() * 4 / 5);
            $itemTall.height($item.width() * 8 / 5);
            $itemWide.width($grid.width() / $cols * 2);
        }
        itemSizes();

        $grid.isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: $grid.width() / $cols
            }
        });

        // Update Grid On Resize
        $(window).resize(function () {
            itemSizes();
            $grid.isotope({
                masonry: {
                    columnWidth: $grid.width() / $cols
                }
            })
        }).resize();

    });



    // FILTER
    $('.filter').on('click', 'li', function () {
        var filter = $(this).attr('data-filter');
        $('.grid').isotope({
            filter: filter
        });
        $('.filter ul li').removeClass('active');
        $(this).addClass('active');
    });

    $('.ply').click(function () {
        $('.video_overlay').hide();
    });

    // MASONRY
    // ---------------------------------
    $(window).load(function () {
        $('.masonry').each(function () {
            var $this = $(this);
            $this.imagesLoaded(function () {
                $this.isotope({
                    itemSelector: '.masonry-item'
                });
            });
        });
    });

});

// Feture Music Slider Main banner
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    asNavFor: '.slider-nav',

});

$('.slider-nav').slick({
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    autoplay: true,
    centerMode: false,

    slidesPerRow: 1,


});
// sidbar sticky
$('.sticky_right, .left-news')
    .theiaStickySidebar({
        additionalMarginTop: 30
    });
//remove active class from all thumbnail slides
$('.slider-nav .slick-slide').removeClass('slick-current');

//set active class to first thumbnail slides
$('.slider-nav .slick-slide').eq(0).addClass('slick-current');

// On before slide change match active thumbnail to current slide
$('.slider-for').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav .slick-slide').removeClass('slick-current');
    $('.slider-nav .slick-slide').eq(mySlideNumber).addClass('slick-current');
});
//Countdown Js
$(function () {
    var austDay = new Date();
    austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
    $('#defaultCountdown').countdown({
        until: austDay
    });
    $('#year').text(austDay.getFullYear());
});

$(function () {
    var TILE_IDS = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
    ];
    var rows;
    var rows_lg = [
        " A A B . . . ",
        " A A B . . C ",
        " . . . . D C ",
        " E E F F D . ",
        " . . F F . . ",
        " . G G . . . "
    ];
    var rows_sm = [
        " A A B . . ",
        " A A B . . ",
        " . C . . . ",
        " . C D E E ",
        " F F D . . ",
        " F F . . . ",
        " . G G . . ",
        " . . . . . "
    ];
    var rows_xs = [
        " A A B ",
        " A A B ",
        " . . . ",
        " . . C ",
        " . . C ",
        " . . D ",
        " E E D ",
        " F F . ",
        " F F . ",
        " . . . ",
        " . G G ",
        " . . . "
    ];

    var el = $('#masonry'),
        grid = new Tiles.Grid(el);
    grid.cellPadding = 0;
    grid.animationDuration = 0;

    grid.resizeColumns = function () {
        return this.template.numCols;
    };
    grid.numCols = function () {
        return this.template.numRows;
    };

    grid.createTile = function (tileId) {
        var tile = new Tiles.Tile(tileId);
        tile.$el.attr('tile-id', tileId).addClass('pos-abt').append($(" > .item:first", el));
        return tile;
    };

    // get the rows json for different screen
    var $window = $(window);
    var getRows = function () {
        var $rows;
        $window.width() < 768 && ($rows = rows_xs);
        $window.width() >= 768 && ($rows = rows_sm);
        $window.width() >= 992 && ($rows = rows_lg);
        return $rows;
    };

    grid.template = Tiles.Template.fromJSON(getRows());
    grid.isDirty = true;
    grid.resize();

    var ids = TILE_IDS.slice(0, grid.template.rects.length);
    grid.updateTiles(ids);
    grid.redraw(true);

    // set height on mobile
    var setHeight = function () {
        el.height('auto');
        $window.width() < 768 && el.height(grid.cellSize * grid.template.numRows);
    }
    setHeight();

    // resize the window
    var $resize, $width = $window.width();
    $window.resize(function () {
        if ($width !== $window.width()) {
            clearTimeout($resize);
            $resize = setTimeout(function () {
                grid.template = Tiles.Template.fromJSON(getRows());
                grid.resize();
                grid.redraw(true);
                setHeight();
                $width = $window.width();
            }, 200);
        }
    });

});
// Google Map

window.onload = MapLoadScript;

function GmapInit() {
    Gmap = jQuery('.map-canvas');
    Gmap.each(function () {
        var $this = $(this),
            lat = -35.2835,
            lng = 149.128,
            zoom = 12,
            scrollwheel = false,
            zoomcontrol = true,
            draggable = true,
            mapType = google.maps.MapTypeId.ROADMAP,
            title = '',
            contentString = '',
            dataLat = $this.data('lat'),
            dataLng = $this.data('lng'),
            dataZoom = $this.data('zoom'),
            dataType = $this.data('type'),
            dataScrollwheel = $this.data('scrollwheel'),
            dataZoomcontrol = $this.data('zoomcontrol'),
            dataHue = $this.data('hue'),
            dataSaturation = $this.data('saturation'),
            dataLightness = $this.data('lightness'),
            dataTitle = $this.data('title'),
            dataContent = $this.data('content');

        if (dataZoom !== undefined && dataZoom !== false) {
            zoom = parseFloat(dataZoom);
        }
        if (dataLat !== undefined && dataLat !== false) {
            lat = parseFloat(dataLat);
        }
        if (dataLng !== undefined && dataLng !== false) {
            lng = parseFloat(dataLng);
        }
        if (dataScrollwheel !== undefined && dataScrollwheel !== null) {
            scrollwheel = dataScrollwheel;
        }
        if (dataZoomcontrol !== undefined && dataZoomcontrol !== null) {
            zoomcontrol = dataZoomcontrol;
        }
        if (dataType !== undefined && dataType !== false) {
            if (dataType == 'satellite') {
                mapType = google.maps.MapTypeId.SATELLITE;
            } else if (dataType == 'hybrid') {
                mapType = google.maps.MapTypeId.HYBRID;
            } else if (dataType == 'terrain') {
                mapType = google.maps.MapTypeId.TERRAIN;
            }
        }
        if (dataTitle !== undefined && dataTitle !== false) {
            title = dataTitle;
        }
        if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
            draggable = false;
        }

        var mapOptions = {
            zoom: zoom,
            scrollwheel: scrollwheel,
            zoomControl: zoomcontrol,
            draggable: draggable,
            center: new google.maps.LatLng(lat, lng),
            mapTypeId: mapType
        };
        var map = new google.maps.Map($this[0], mapOptions);

        var image = 'img/marker-icon.png';
        if (dataContent !== undefined && dataContent !== false) {
            contentString = '<div class="map-data">' + '<h6>' + title + '</h6>' + '<div class="map-content">' + dataContent + '</div>' + '</div>';
        }
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: map,
            icon: image,
            title: title
        });
        if (dataContent !== undefined && dataContent !== false) {
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        }

        if (dataHue !== undefined && dataHue !== false) {
            var styles = [{
                stylers: [{
                        hue: dataHue
                    },
                    {
                        saturation: dataSaturation
                    },
                    {
                        lightness: dataLightness
                    }
                ]
            }];
            map.setOptions({
                styles: styles
            });
        }
    });
}

function MapLoadScript() {

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAAT3zaiO9ryRgreIPwHqWHIlmN3n9gGHU&v=3.exp&sensor=false&' + 'callback=GmapInit';
    document.body.appendChild(script);
}