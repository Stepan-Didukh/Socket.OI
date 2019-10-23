// module.exports.provider = require('./dataBase.provider');

const Sequelize = require('sequelize');
const fs = require('fs');
const {resolve} = require('path');

module.exports = (()=>{
    let instance;

    function initConnection() {
        const client = new Sequelize('houses', 'root', 'root', {
            host:'localhost',
            dialect:'mysql'
        });

        let models = {};

        function getModels() {
            fs.readdir('./dataBase/models', ((err, files) => {
                files.forEach(files=>{
                    const [modelName] = files.split('.');
                    models[modelName] = client.import(resolve(`./dataBase/models/${modelName}`))
                })
            }))
        }

        return {
            setModels: () => getModels(),
            getModels: (modelName) => models[modelName]
        }
    }

    return {
        getInstance: () => {
            if(!instance){
                instance = initConnection();
            }
            return instance;
        }
    }
})();