import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws,request,client) {

  ws.on('message', function message(data) {

    //var msg = JSON.parse(data);

    const ip = request.socket.remoteAddress;
    console.log('ip=' + ip);
    console.log('req ID = '+request.url);
    console.log(`received: %s `, data);

    ws.send(data)

    function calc(e){
      if((data%2)==0){
        let temp = parseInt(e)-100
        return temp
      }else{
        let temp = parseInt(e)+100
        return temp
      }
    }

    if(request.url=='/1'){
      if((data%2)==0){
        ws.send('Send data for client 1 is Even '+calc(data))
      }else{
        ws.send('Send data for client 1 is Odd '+calc(data))
      }
    }
    else if(request.url=='/2'){
      if((data%2)==0){
        ws.send('Send data for client 1 is Even '+calc(data))
      }else{
        ws.send('Send data for client 1 is Odd '+calc(data))
      }
    }
    else{
        ws.send('Send data for another client is '+calc(data))
    }
  });
});

