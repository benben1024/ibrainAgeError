/**
 * Created by lcg on 2017/2/28.
 */

const CreateError = (code, message) => ({ code, message });

class IbrainAgeError extends Error {
    constructor(err){
        super(err.message);
        this.code = err.code;
    }

    toJSON(){
        return {code: this.code, message: this.message };
    }
}

const error = {

        check: (err) => {
        if (typeof err === 'object' &&
        typeof err.code === 'string' &&
        typeof err.message === 'string') {
    return true;
}

return false;
},

equal: (a, b) => {
    if (error.check(a) && error.check(b)){
        return a.code === b.code && a.message === b.message;
    }

    return false;
},

isSuccess: (err) => {
    if (error.check(err)){
        return err.code === error.success.code && err.message === error.success.message;
    }

    return false;
},

createError: (err) => {
    if (error.check(err)){
        return new IbrainAgeError(err)
    }

    throw new TypeError('error format invalid');
},

success: CreateError('0','success.'),
    has_not_login: CreateError('10001','has not login.'),

    unknown_error: CreateError('10099','unknown error.')
};

module.exports = {IBAError: error, IbrainAgeError};