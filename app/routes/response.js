import Route from '@ember/routing/route';

export default class ResponseRoute extends Route {
    async model(){
        const data = "Mani";
        return data;
    }
}
