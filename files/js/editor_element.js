/**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
(function () {
    
    var MailjetWidget = PlatformElement.extend({
        initialize: function () {
            $(this.settings.get('widgetcode')).appendTo('.widgetcode');
        },
    });
    return MailjetWidget;
})();

