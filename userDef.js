var model = require('./validator');

module.exports = new model({
    userName: {
        type: model.types.string,
        default: 'No name',
        require: 'this field required!!!',
        regex: {
            regex: /0/g,
            message: 'regex match!!!',
            flag: true
        },
        max: {
            length: 6,
            message: 'this field < 7'
        },
        min: {
            length: 5,
            message: 'this field > 4'
        }
    },
    password: {
        type: model.types.string
    },
    role: {
        type: [model.types.string]
    }
});