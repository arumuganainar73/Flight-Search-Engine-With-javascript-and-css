/** ------------------------------------------------------------
 * 
 * Flight js
 * 
 * -------------------------------------------------------------
 */
var APP = {};
APP.flight = {
    /**
    * Initialize all starting functions
    */
    flightData: [],
    init: () => {
        APP.flight.initializeFlightJson();
        APP.flight.eventHandler();
    },
    eventHandler: () => {
        jQuery('#searchBtn').on('click', APP.flight.searchValues);
        jQuery('#resetBtn').on('click', APP.flight.resetValues);

    },
    resetValues: () => {
        jQuery('.page__content .panel').remove();
        APP.flight.appendFilterData(APP.flightData);
    },
    /**
     * Initialize Flight json
     */
    initializeFlightJson: () => {
        APP.flightData = [{
            "price": "9,500.00",
            "number": 'AI-202',
            "orgin": "CH",
            "destination": "MDU",
            "depart": '10:00 AM',
            "arrive": '12:00 PM',
            "datefrom": "15/05/2019",
            "dateto": "16/05/2019",
            "passengers": '1',
        }, {
            "price": "6,500.00",
            "number": 'AI-202',
            "orgin": "PNQ",
            "destination": "DEL",
            "depart": '10:00 AM',
            "arrive": '12:00 PM',
            "datefrom": "18/05/2019",
            "dateto": "22/05/2019",
            "passengers": '1',
        }, {
            "price": "55,500.00",
            "number": 'AI-202',
            "orgin": "AUS",
            "destination": "US",
            "depart": '10:00 AM',
            "arrive": '12:00 PM',
            "datefrom": "19/05/2019",
            "dateto": "15/05/2019",
            "passengers": '1',
        }, {
            "price": "8,500.00",
            "number": 'AI-202',
            "orgin": "BAN",
            "destination": "HYD",
            "depart": '10:00 AM',
            "arrive": '12:00 PM',
            "datefrom": "01/06/2019",
            "dateto": "05/06/2019",
            "passengers": '1',
        }, {
            "price": "18,500.00",
            "number": 'AI-202',
            "orgin": "MUM",
            "destination": "GUJ",
            "depart": '10:00 AM',
            "arrive": '12:00 PM',
            "datefrom": "06/06/2019",
            "dateto": "10/06/2019",
            "passengers": '1',
        }, {
            "price": "20,500.00",
            "number": 'AI-202',
            "orgin": "DUBAI",
            "destination": "IND",
            "depart": '10:00 AM',
            "arrive": '12:00 PM',
            "datefrom": "11/06/2019",
            "dateto": "13/06/2019",
            "passengers": '1',
        }, {
            "price": "15,500.00",
            "number": 'AI-202',
            "orgin": "IND",
            "destination": "NZ",
            "depart": '10:00 AM',
            "arrive": '12:00 PM',
            "datefrom": "16/06/2019",
            "dateto": "18/06/2019",
            "passengers": '1',
        }, {
            "price": "10,500.00",
            "number": 'AI-202',
            "orgin": "IND",
            "destination": "SL",
            "depart": '10:00 AM',
            "arrive": '12:00 PM',
            "datefrom": "20/06/2019",
            "dateto": "25/06/2019",
            "passengers": '1',
        }];
        jQuery('.page__content .panel').remove();
        APP.flight.appendFilterData(APP.flightData);
    },
    searchValues: () => {
        const orgin = jQuery('#orgin').val();
        const destination = jQuery('#destination').val();
        const datefrom = jQuery('#datefrom').val();
        const dateto = jQuery('#dateto').val();
        const passengers = jQuery('#passengers').val();

        let filter = {};
        if (orgin)
            filter['orgin'] = orgin;
        if (destination)
            filter['destination'] = destination;
        if (datefrom)
            filter['datefrom'] = datefrom;
        if (dateto)
            filter['dateto'] = dateto;

        filterFlights = APP.flightData.filter(function (item) {
            for (let key in filter) {
                if (item[key] === undefined || item[key] != filter[key])
                    return false;
            }
            return true;
        });
        if (!filterFlights.length) {
            jQuery('.page__content .panel').remove();
            jQuery('.page__content').append('<div class="panel">NO RESULT FOUND</div');
        }

        if (filterFlights && filterFlights.length)
            APP.flight.appendFilterData(filterFlights);
    },
    appendFilterData: (data) => {
        jQuery('.page__content .panel').remove();
        data.forEach((val, index) => {
            const htmlString = '<div class="panel"><div class="price">' + val.price + ' \n\
            </div>\n\
            <div class="panel--body">\n\
                <div class="panel--list">\n\
                    <div class="panel-content">\n\
                        <span>' + val.number + '</span>\n\
                        <span><strong>' + val.orgin + '>' + val.destination + '</strong></span>\n\
                        <span>Depart: ' + val.depart + '</span>\n\
                        <span>Arrive: ' + val.arrive + '</span>\n\
                    </div>\n\
                </div>\n\
                <div class="panel--list">\n\
                    <div class="panel-content">\n\
                        <span>' + val.number + '</span>\n\
                        <span><strong>' + val.destination + '>' + val.orgin + '</strong></span>\n\
                        <span>Depart: ' + val.depart + '</span>\n\
                        <span>Arrive: ' + val.arrive + '</span>\n\
                    </div>\n\
                </div>\n\
                <div class="panel--button">\n\
                    <button type="button" class="btn btn-default" alt="Book this flight button">Book this flight</button>\n\
                </div>\n\
            </div>\n\
        </div>';
            jQuery('.page__content').append(htmlString);
        });
    }
};
jQuery(document).ready(() => {
    APP.flight.init();
});


