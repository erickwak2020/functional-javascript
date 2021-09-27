// 컬렉션 중심 프로그래밍의 4가지 유형과 함수


var users = [
    { id: 10, name: 'ID', age: 36 },
    { id: 20, name: 'BJ', age: 32 },
    { id: 30, name: 'JM', age: 32 },
    { id: 40, name: 'PJ', age: 27 },
    { id: 50, name: 'HA', age: 25 },
    { id: 60, name: 'JE', age: 26 },
    { id: 70, name: 'JI', age: 31 },
    { id: 80, name: 'MP', age: 23 },
    { id: 90, name: 'FP', age: 13 }
];

function _each(list, iter) {
    for (let i = 0; i < list.length; i++) {
        iter(list[i]);
    }
}

function _map(list, mapper) {
    var newList = [];
    console.log(list);
    console.log(mapper);
    for (let i = 0; i < list.length; i++) {
        newList.push(mapper(list[i]));
    }
    return newList;
}

// 1. 수집하기 - map, values, pluck
console.log(
    _values(users[0])
);

function _values(data) {
    console.log(data);
    return _map(data, function(val) {
        console.log("----",val);
        return val;
    })
}