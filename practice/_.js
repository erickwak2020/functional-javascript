let users = [
    {id: 1, name: 'ID', age: 36},
    {id: 2, name: 'BJ', age: 32},
    {id: 3, name: 'JM', age: 32},
    {id: 4, name: 'PJ', age: 27},
    {id: 5, name: 'HA', age: 25},
    {id: 6, name: 'JE', age: 26},
    {id: 7, name: 'JI', age: 31},
    {id: 8, name: 'MP', age: 23}
];


function _filter(users, predicate) {
    let newList = [];
    /*
    for (let i = 0; i < users.length; i++) {
        if (predicate(users[i])) {
            newList.push(users[i]);
        }
    }
     */
    _each(users, function(val) {
        if (predicate(val)) {
            newList.push(val);
        }
    })
    return newList;
}

function _map(list, mapper) {
    let newList = [];
    /*
    for (let i = 0; i < list.length; i++) {
        newList.push(mapper(list[i]));
    }
     */
    _each(list, function(val) {
        newList.push(mapper(val));
    })
    return newList;
}

function _each(list, iter) {
    for (let i = 0; i < list.length; i++) {
        iter(list[i]);
    }
}

let userNames = _map(users, function(user) { return user.name; });
console.log(userNames);