import Route from '@ember/routing/route';
import {service} from '@ember/service';
export default class ResponseRoute extends Route {
    @service store;
  async model(params) {
    // const input = params.id;
    // console.log(input);

    // const responseData = await fetch(
    //   `http://localhost:3000/fetch-ticket/${input}`,
    // );
    // const data = await responseData.json();
    // return data;
    const responseData = await this.store.findRecord('flight',params.id);
    return responseData;
  }
}
