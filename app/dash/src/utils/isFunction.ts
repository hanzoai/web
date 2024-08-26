const toString = (obj: any) => {
    return Object.prototype.toString.call(obj);
};

export const isFunction = function isFunction(value: any) {
    var str;
    str = toString(value);
    return str === '[object Function]' || str === '[object GeneratorFunction]' || str === '[object AsyncFunction]';
};