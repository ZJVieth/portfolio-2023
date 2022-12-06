/**
 * Concats an array of classNames into one string.
 * @param {Array<string>} names 
 * @returns {string} className
 */
const className = names => {
    return names.join(" ")
}

export { className }