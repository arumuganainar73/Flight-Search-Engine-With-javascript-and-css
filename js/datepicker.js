
/** ------------------------------------------------------------
 * 
 * datepicker to pick data range
 * 
 * -------------------------------------------------------------
 */

var APP = {};
APP.datepicker = {
    /**
    * Initialize all starting functions
    */
    init: () => {
        APP.datepicker.initalizeDatePicker();
    },
    /**
     * Initialize DatePicker
     */
    initalizeDatePicker: () => {
        if (jQuery() && jQuery().datepicker) {
            $("#datefrom").datepicker({
                defaultDate: "+1w",
                dateFormat: 'dd/mm/yy',
                minDate: 0,
                changeMonth: false,
                numberOfMonths: 1,
                onClose: function (selectedDate) {
                    $("#dateto").datepicker("option", "minDate", selectedDate);
                }
            });
            $("#dateto").datepicker({
                defaultDate: "+1w",
                dateFormat: 'dd/mm/yy',
                changeMonth: false,
                numberOfMonths: 1,
                onClose: function (selectedDate) {
                    $("#datefrom").datepicker("option", "maxDate", selectedDate);
                }
            });
        }
    }
};

jQuery(document).ready(() => {
    APP.datepicker.init();
});
