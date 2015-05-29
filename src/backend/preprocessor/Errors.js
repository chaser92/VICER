define(function () {
    function TypeMismatch (expected, got, operation) {
	this.expected = expected;
	this.got = got;
	this.operation = operation;
	//this.stack = new Error().stack;
	this.message = operation + ': TYPE MISMATCH. EXPECTED ' +
	    prettyPrint(expected) +
	    ' GOT ' +
	    prettyPrint(got);
    }

    function NotAFunction (name) {
	this.name = name;
	this.message = name + ' IS NOT A FUNCTION';
    }

    function Unknown (name) {
	this.name = name;
	this.message = name + ': NAME UNKNOWN';
    }

    function WrongArgNum(expected, got, funName) {
	this.expected = expected;
	this.got = got;
	this.funName = funName;
	this.message = 'FUNCTION_CALL: WRONG ARGUMENT NUMBER. FUNCTION ' + funName + ' EXPECTED ' + expected + ' GOT ' + got;
    }

    function prettyPrint(obj) {
	return JSON.stringify(obj, null, 2);
    }

    return {
	TypeMismatch: TypeMismatch,
	NotAFunction: NotAFunction,
	Unknown: Unknown,
	WrongArgNum: WrongArgNum
    };
});
