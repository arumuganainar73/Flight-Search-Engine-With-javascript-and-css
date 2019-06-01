

/** ------------------------------------------------------------
 * 
 * show / hide the return date depend on the active tab
 * 
 * -------------------------------------------------------------
 */
var APP = {};
APP.tabs = {
    /**
    * Initialize all starting functions
    */
    init: () => {
        APP.tabs.showHideTab();
    },
    /**
     * Initialize showHideTab
     */
    showHideTab: () => {
        if (jQuery()) {
            $("#return-date").hide();
            $("#one-way-tab").on('click', () => {
                $("#return-date").hide();
                $("#return-tab").removeClass('active--tab');
                $("#one-way-tab").addClass('active--tab');
            });

            $("#return-tab").on('click', () => {
                $("#return-date").show();
                $("#one-way-tab").removeClass('active--tab');
                $("#return-tab").addClass('active--tab');
            });
        }
    }
};
jQuery(document).ready(() => {
    APP.tabs.init();
});


