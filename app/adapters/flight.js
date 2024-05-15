import RESTAdapter from '@ember-data/adapter/rest';

export default class FlightAdapter extends RESTAdapter {
    host = "http://localhost:3000";
}
