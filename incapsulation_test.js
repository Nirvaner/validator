var cat = {};
Object.defineProperty(cat, 'say', {
    get: function () {
        console.log('may');
    }
});

cat.say;