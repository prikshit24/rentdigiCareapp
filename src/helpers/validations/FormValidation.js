export const validatefield = (field) => {
    if (field === null || field === undefined || field === '') {
        return (false)
    } else {
        return (true)
    }
}

export const validateEmail = (email) => {
    if (email === null || email === undefined || email === '') {
        return (false)
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
        return (false)
    } else {
        return (true)
    }
}

export const validatePhone = (phone) => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone === null || phone === undefined || phone === '') {
        return (false);
    } else if (phoneno.test(Number(phone))) {
        return (true)
    } else {
        return (false)
    }
}