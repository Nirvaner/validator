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

function ModelCreator(definition, model, errorIfNotDefField) {

    var that = this;

    var _def = definition;
    var _errors = [];
    var _isValid = false;

    function _setDefinition(definition) {
        if (definition) {
            _def = definition;
            for (var field in _def) {
                that[field] = _def[field].default;
                //Object.defineProperty(that, field, {
                //    get
                //});
            }
        }
    }

    function _validate() {
        _isValid = _errors.length < 1;
        return _errors;
    }

    function isValid() {
        _validate();
        return _isValid;
    }

    this.isValid = false;
    this.errors = _errors;
    this.setDefinition = _setDefinition;

    Object.defineProperties(this, {
        setDefinition: {
            enumerable: false
        },
        isValid: {
            enumerable: false,
            get: isValid
        },
        errors: {
            enumerable: false
        }
    });

    this.setDefinition(_def);
}

module.exports = ModelCreator;
module.exports.types = types;