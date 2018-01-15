import validator from 'validator'

const isEmpty = (value) => value === undefined || value === null || value === ''

export function isEmail(value) {
    if (!validator.isEmail(String(value))) {
        return 'You need to give a valid email address'
    }
}

export function required(value) {
    if (isEmpty(value)) {
        return 'This field is required'
    }
}

export function minLength(min) {
    return (value) => {
        if (!isEmpty(value) && value.length < min) {
            return `Must be at least ${min} characters`
        }
    }
}

export function maxLength(max) {
    return (value) => {
        if (!isEmpty(value) && value.length > max) {
            return `Must be no more than ${max} characters`
        }
    }
}

export function integer(value) {
    if (!isEmpty(value) && !Number.isInteger(Number(value))) {
        return 'Must be an integer'
    }
}

export function oneOf(enumeration) {
    return (value) => {
        if (!~enumeration.indexOf(value)) {
            return `Must be one of: ${enumeration.join(', ')}`
        }
    }
}

export function match(field) {
    return (value, data) => {
        if (data) {
            if (value !== data[field]) {
                return `Must match ${field}`
            }
        }
    }
}