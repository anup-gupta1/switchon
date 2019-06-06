

// module.exports = function(io,app) {

//     app.set("server", server);
// var notifClients = {};
// app.set("sockets", notifClients);
// var nsp = io.of("/notifications");
// // connection establishment
// nsp.on("connect", function(clientSocket) {
//   clientSocket.on("initClientInfo", function(data) {
//      console.log("-------------------initial client info for socket---------------",data)
//     notifClients[data.userId] = clientSocket;
//     // console.log('a user connected')
//     app.set("sockets", notifClients);
//   });
//   // on socket disconnect
//   clientSocket.on("disconnect", function(reason) {
//     var req_socket_uid = Object.keys(notifClients).filter(function(key) {
//       return notifClients[key].id === clientSocket.id;
//     })[0];
//     delete notifClients[req_socket_uid];
//   });
// });


// }















// // module.exports = function(io,app) {
// //     const requestNsp = io.of('/request');
// //     let requestRooms = {}
    
// //     requestNsp.on('connect',(socket)=>{
// //         // console.log("-------------------------sock id--------*************************************----------------",socket.id)
// //         app.set('socket',socket)
       
// //         socket.on('requestRooms',(data)=>{
// //             var room = `request-${data.department_id}`;
// //             socket.join(room,()=>{
// //                 let rooms = Object.keys(socket.rooms);
// //                 console.log('------------------------ rooms ----------------------',rooms)
// //                 requestRooms[data.department_id] = room
// //                 app.set('rooms',requestRooms);
    
// //             })
// //         })
       
    
        
// //     })
// // };


















