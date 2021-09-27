
function _curry(fn) {
    return function(a, b) {
        return arguments.length === 2 ? fn(a, b) : function(b) { return fn(a, b); };
    }
}

var add = _curry(function(a, b) {
    return a + b;
});

console.log(add(10)(3));


function _filter(list, predicate) {
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        if (predicate(list[i])) {
            newList.push(list[i]);
        }
    }
    return newList;
}

function _each(list, iter) {
    for (let i = 0; i < list.length; i++) {
        iter(list[i]);
    }
}

var slice = Array.prototype.slice;
function _rest(list, num) {
    return slice.call(list, num || 1);
}

// 4. _reduce 만들기

function _reduce(list, iter, memo) {
    if( arguments.length === 2) {
        memo = list[0];
        list = _rest(list,1);
    }
    _each(list, function(val) {
        memo = iter(memo, val);
    })
    return memo;
}

console.clear();

console.log(
    _reduce([1,2,3,4], function(a, b) { return a + b; }, 0)
);

function _pipe() {
    var fns = arguments;
    return function(arg) {
        return _reduce(fns, function (arg, fn) {
            return fn(arg);
        }, arg);
    }
}

let f1 = _pipe(function(a) {return a + 1; } , function(a) { return a * 2; }, function(a) { return a * a * a; });

console.log( f1(1) );

function _go(arg) {
    var fns = _rest(arguments);
    return _pipe.apply(null, fns)(arg);
}

_go(function(a) {return a + 1; } , function(a) { return a * 2; }, function(a) { return a * a * a; }, console.log);


//6. _each의 외부 다형성 높이기


_each([1,2,3], console.log);