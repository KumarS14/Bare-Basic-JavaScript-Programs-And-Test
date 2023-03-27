const transform = (message,methodFunction) => {
    return methodFunction(message)
};
module.exports = transform