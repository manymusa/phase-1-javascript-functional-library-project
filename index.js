function isObject(collection){
    if(typeof collection === 'object' && !Array.isArray(collection)){
        return Object.values(collection);
    }else{
        return collection;
    }
}

function myEach(collection,cb){
    let array = isObject(collection);
    for(let ele of array){
        cb(ele)
    }
    return collection
}

function myMap(collection,cb){
    let array = isObject(collection);
    let newArray = [];
    for(let ele of array){
        newArray.push(cb(ele));
    }
    return newArray
}

function myReduce(collection,cb,acc){
    let array = isObject(collection);
    for(let ele of array){
        if(typeof acc === 'undefined'){
            acc = array[0]
        } else{
            acc = cb(acc,ele,...array);
        }
    }
    return acc
}

function myFind(collection,cb){
    let array = isObject(collection);
    for(let ele of array){
        if(cb(ele) === true){
            return ele
        }
    }
    return undefined
}

function myFilter(collection,cb){
    let array = isObject(collection);
    let passedFilter = []
    for(let ele of array){
        if(cb(ele) === true){
            passedFilter.push(ele)
        }
    }
    return passedFilter
}

function mySize(collection){
    let array = isObject(collection);
    return array.length
}

function myFirst(arr,int){
    if(typeof int === 'undefined'){
        return arr[0];
    }else{
        return arr.slice(0,int)
    }
}

function myLast(arr,int){
    if(typeof int === 'undefined'){
        return arr[arr.length-1];
    }else{
        return arr.slice(-int)
    }
}

function myKeys(obj){
    return Object.keys(obj);
}

function myValues(obj){
    return Object.values(obj);
}