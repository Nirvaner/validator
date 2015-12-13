var types = {
    int: 'int',
    float: 'float',
    string: 'string'
};

var typesEq = {
    int: ['number'],
    float: ['number'],
    string: ['string']
};

function isType(type, typeOf) {
    return typeOf in typesEq[type];
}

function ModelCreator(definition) {

    var _model = {};
    var _def = definition;
    var _errors = [];

    function _setDefinition(definition) {
        _def = definition;
        init(_def);
    }

    function _getModel() {
        return _model;
    }

    function _validateField(field) {

    }

    function _validate() {
        return _errors;
    }

    function init(definition) {
        if (definition) {
            Object.keys(definition).forEach(function (key) {
                _model[key] = definition[key].default || null;
                Object.defineProperty(this, key, {
                    get: function () {
                        return _model[key];
                    },
                    set: function (value) {
                        _model[key] = value;
                    }
                });
            });
        }
    }

    this.isValid = false;
    this.errors = _errors;
    this.setDefinition = _setDefinition;
    this.validate = _validate;

    Object.defineProperties(this, {
        isValid: {
            enumerable: false
        },
        errors: {
            enumerable: false
        },
        setDefinition: {
            enumerable: false
        },
        validate: {
            enumerable: false
        }
    });

    init(_def);
}

module.exports = ModelCreator;
module.exports.types = types;