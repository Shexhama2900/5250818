require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "OTM0ODkwMzE4NDY4MzYyMzEw.Ye2qdQ.ks9Tz7D2zgla5JLlUDXilZD5TDM",  // your bot token
    prefix: process.env.PREFIX || "s!", // bot prefix
    ownerID: process.env.OWNERID || "730549617044750346", //your discord id
    mongourl: process.env.MONGO_URI || "mongodb+srv://jubadevlopment:<g112233s>@cluster0.p6dkx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || "#303236", // embed colour
    logs: process.env.LOGS || "934907495359586365", // channel id for guild create and delete logs

    nodes: [
    {
      host: process.env.NODE_HOST || "disbotlistlavalink.ml",
      identifer: process.env.NODE_ID || "local",
      port: parseInt(process.env.NODE_PORT || "443"),
      password: process.env.NODE_PASSWORD || "LAVA",
      secure: parseBoolean(process.env.NODE_SECURE || "true"),

    }
  ],

}

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
