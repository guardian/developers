/* */
"format cjs";function test(e){assert(e.constructor===Child),assert(e.constructor.super_===Parent),assert(Object.getPrototypeOf(e)===Child.prototype),assert(Object.getPrototypeOf(Object.getPrototypeOf(e))===Parent.prototype),assert(e instanceof Child),assert(e instanceof Parent)}function Child(){Parent.call(this),test(this)}function Parent(){}var inherits=require("./inherits"),assert=require("github:jspm/nodelibs@0.0.3/assert");inherits(Child,Parent);var c=new Child;test(c),console.log("ok");
//# sourceMappingURL=test.js.map