function modelCreator(definition) {

    var _model = {};
    var _def = definition;

    function _setDefinition(definition) {
        _def = definition;
        init(_def);
    };

    function _getModel() {
        return _model;
    };

    function _validateField(field) {

    };

    function _validate() {
        var errors = [];
        return errors;
    };

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
    };

    Object.defineProperties(this, {
        isValid: {
            value: false,
            enumerable: false
        },
        errors: {
            value: [],
            enumerable: false
        },
        setDefinition: {
            value: _setDefinition,
            enumerable: false
        },
        validate: {
            value: _validate,
            enumerable: false
        }
    });

    if (_def) init(_def);
    //return this;
};

exports = modelCreator;
exports.types = {
    int: 0,
    float: 1,
    string: 2
};