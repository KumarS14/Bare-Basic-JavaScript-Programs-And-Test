const notify = (message,methodName) => {
    return methodName(message)
};
module.exports = notify;