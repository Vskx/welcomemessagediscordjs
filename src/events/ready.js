const { loadCommands } = require("../../handler");

module.exports = {
    name: "ready",
    once: true,
    /**
     * 
     * @param {Client} client 
     */
    async execute(client) {
        loadCommands(client);


    }
}
