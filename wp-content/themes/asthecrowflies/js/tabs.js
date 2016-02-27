jQuery(function(){

  var hash = window.location.hash;
if(window.location.hash) {
jQuery(window).scrollTop(0);
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
document.title = hash.split('#')[1].replace(/-/g, ' ').toProperCase();
document.title = document.title +=": As The Crow Flies.";
} else {};
  hash && jQuery('ul.nav a[href="' + hash + '"]').tab('show');

  jQuery('a').click(function (e) {
    jQuery(this).tab('show');
	var scrollmem = jQuery('body').scrollTop();
    window.location.hash = this.hash;
jQuery('html,body').scrollTop(scrollmem);
  });
});

jQuery(window).on('hashchange', function() {
  var hash = window.location.hash;
  hash && jQuery('ul.nav a[href="' + hash + '"]').tab('show');
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
document.title = hash.split('#')[1].replace(/-/g, ' ').toProperCase();
document.title = document.title +=": As The Crow Flies.";
});