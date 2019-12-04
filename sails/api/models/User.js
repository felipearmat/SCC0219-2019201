/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        nome: {
            type: 'string',
            required: true
        },
        // items: {
        //   collection: 'item',
        //   via: 'user'
        // },
    }
};

