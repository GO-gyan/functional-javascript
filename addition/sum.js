const foo = x => {
    return ()=> {
        return x;
    }
};

const add = (x, y) => {
    return x + y;
};

const add2 = (fn1, fn2) => {
    return add(fn1(), fn2());
};

const addn = (...arr) => {
    return arr.slice(1)
            .reduce((prev, cur) => {
                return () => {
                    return add2(prev, cur);
                }
            }, arr[0])();
}

const sum = addn(foo(10), foo(20), foo(34), foo(56));

console.log('sum', sum);