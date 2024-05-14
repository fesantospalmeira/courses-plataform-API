module.exports = (objectParams) =>{
    for (let properties in objectParams ){
        if(/Id|id/.test(properties)){
            objectParams [properties] = Number(objectParams[properties])
        }
    }
    return objectParams;
};