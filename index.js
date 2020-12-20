// const sequelize = require("./models/db");
// 测试连接
// (async function(){
//     try{
//         await sequelize.authenticate();
//         console.log("Connection has been established successfully.");
//     }catch(error){
//         console.error("Unable to connect to the database:",error);
//     }
// })()

// require("./models/sync");

require("./models/relation");
require("./mock/mockStudent");

