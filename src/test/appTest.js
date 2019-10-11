const assert = require('chai').assert;
const app = require('../app');



describe('App', function(){
    describe('1', function() {

        it('app should return hello', () => 
       assert.equal(app.sayHello(), 'hello')    
      );

    });

    describe('2', function() {
        it('type of should return string', function() {
        assert.typeOf(app.sayHello(), 'string');     
        });
    });    
});