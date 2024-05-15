import Model, {attr} from '@ember-data/model';

export default class FlightModel extends Model {
  @attr fromLocation;
  @attr toLocation;
  @attr date;
  @attr time;
}
