export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  server.create('flight',{
    id:1,
    fromLocation:"Hyderabad",
    toLocation:"Chennai",
    date:"20-05-2024",
    time:"10:00"
  });
  server.create('flight',{
    id:2,
    fromLocation:"Delhi",
    toLocation:"Mumbai",
    date:"26-07-2024",
    time:"12:00"
  });
}
