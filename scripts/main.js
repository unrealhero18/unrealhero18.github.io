"use strict";$(function(){!function(){$(".js-touch-menu-trigger").on("click",function(t){t.preventDefault();var e=$(this).attr("href");$(e).toggleClass("active")})}(),function(){$(".js-chosen-select").chosen({disable_search:!0,inherit_select_classes:!0})}(),function(){var t=$(".js-single-product-slider");t.slick({adaptiveHeight:!0,arrows:!1,dots:!1}),$(".js-product-pagers").on("click","a",function(e){e.preventDefault(),$(e.delegateTarget).children("a").removeClass("active"),$(this).addClass("active");var i=+this.dataset.slide;t.slick("slickGoTo",i)})}(),function(){var t=['<button type="button" class="slick-arrow slick-prev icon icon-arrow-left"></button>','<button type="button" class="slick-arrow slick-next icon icon-arrow-right"></button>'];$(".js-many-products-slider").slick({infinite:!0,slidesToShow:5,slidesToScroll:1,prevArrow:t[0],nextArrow:t[1],dots:!1,responsive:[{breakpoint:1199,settings:{slidesToShow:4}},{breakpoint:991,settings:{slidesToShow:3}},{breakpoint:767,settings:{slidesToShow:1,arrows:!1,dots:!0}}]}),$(".js-articles-slider").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,variableWidth:!0,prevArrow:t[0],nextArrow:t[1],dots:!1,responsive:[{breakpoint:767,settings:{slidesToShow:1,variableWidth:!1}}]}),$(".js-viewed-slider").slick({infinite:!0,slidesToScroll:1,variableWidth:!0,prevArrow:t[0],nextArrow:t[1],dots:!1,responsive:[{breakpoint:767,settings:{arrows:!1,dots:!0}}]})}(),function(){var t={type:"image",gallery:{enabled:!0}};$(".js-product-modal").magnificPopup(t),$(".js-cert-modal").magnificPopup(t)}(),function(){$.fn.magicLine=function(){var t=$(".js-magic-line");return t.css({width:this.width()+"px",left:this.position().left+parseInt(this.css("paddingLeft"))+"px"}),this}}(),function(){var t=$(".js-product-enav").children().children();t.first().magicLine().addClass("active"),$(".js-product-enav").on("click","a",function(){t.removeClass("active"),$(this).magicLine().addClass("active")}),$(".js-product-enav").on("mouseenter","a",function(){$(this).magicLine()}),$(".js-product-enav").on("mouseleave","a",function(){t.filter(".active").magicLine()})}(),function(){var t=$(".js-sticky-element"),e=$(".js-sticky-path");$(window).on("scroll",function(){var i=window.scrollY,s=0;t.each(function(t,e){var i=$(e).outerHeight();s=i>s?i:s});var a=t.parent().offset().top,n=a+e.height()-s,o=t.hasClass("fixed");i>=a&&i<n?!o&&t.addClass("fixed"):o&&t.removeClass("fixed")})}(),function(){$(".js-expand-trigger").on("click",function(t){t.preventDefault();var e=this.dataset.multiple,i=$(this).closest(".js-expand-container"),s=i.find(".js-expand-data"),a=i.find(".js-expand-text");e||(s=s.last(),a=a.last()),$(this).hasClass("active")?($(this).removeClass("active"),s.removeClass("active"),a.text($(this).attr("data-text-show"))):($(this).addClass("active"),s.addClass("active"),a.text($(this).attr("data-text-hide")))}),function(){$(".js-tab-trigger").on("click",function(t){t.preventDefault();var e=+this.dataset.tabIndex,i=$(this).closest(".js-tab-container"),s=i.find(".js-tabs-data");$(this).siblings().removeClass("active"),$(this).addClass("active"),s.each(function(t,i){$(i).children().removeClass("active"),$(i).children().eq(e).addClass("active")})})}(),function(){$(".js-video-play").on("click",function(t){t.preventDefault();var e=$(this).parent(),i=e.children("img"),s=[e.width(),e.height()],a=this.dataset.ytVideo,n='<iframe width="'+s[0]+'" height="'+s[1]+'" src="https://www.youtube.com/embed/'+a+'?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>';$(this).addClass("active"),i.replaceWith(n)})}()}()});