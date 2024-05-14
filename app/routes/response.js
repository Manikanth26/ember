import Route from '@ember/routing/route';

export default class ResponseRoute extends Route {
  async model(params) {
    const input = params.id;
    console.log(input);

    const responseData = await fetch(`http://localhost:3000/fetch-ticket/${input}`);
    const data = await responseData.json();
    return data;
  }
}
