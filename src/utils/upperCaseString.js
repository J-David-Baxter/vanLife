const upperCaseString = (string) => {
    if (typeof string !== 'string') return
    const firstLetter = string[0].toUpperCase();
    return firstLetter + string.slice(1);
}

export default upperCaseString