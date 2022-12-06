/**
 * Wraps a value back to minimum when exceeding a maximum and back to maximum when
 * exceeding a minimum value.
 * @param {number} low 
 * @param {number} high 
 * @param {number} val 
 * @returns number
 */
const wrap = (low, high, val) => {
    if (val < low)
        return high
    if (val > high)
        return low
    return val
}

export { wrap }