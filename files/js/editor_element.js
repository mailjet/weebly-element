/**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
(function () {
    var MailjetWidget = PlatformElement.extend({
        initialize: function () {
            if('Paste your widget iFrame code here' != this.settings.get('widgetcode')) {
                $('#instructions').remove();
            }
            $(this.settings.get('widgetcode')).appendTo('.widgetcode');
        },
    });
    return MailjetWidget;
})();

