/**
 * Created by lcg on 2017/2/28.
 */

const CreateError = (code, message, httpCode) => ({ code, message, httpCode });

class IbrainAgeError extends Error {
    constructor(err){
        super(err.message);
        this.code = err.code;
        this.httpCode = err.httpCode;
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
    has_not_login: CreateError('10001','has not login.',401),
    params_invalid: CreateError('10002','params invalid.',401),
    database_error: CreateError('10003','database error.',500),
    user_not_exist: CreateError('10004','user not exist.',404),
    user_already_exist: CreateError('10005','user already exist.',400),
    already_binded: CreateError('10006','already binded.',400),
    resourse_not_exist: CreateError('10007','resourse not exist.',404),
    permission_invalid: CreateError('10008','permission invalid.',401),
    invalid_token: CreateError('10009','invalid token.',401),
    sms_error: CreateError('10010','sms error.',400),
    verify_error: CreateError('10011','verify error.',400),

    cache_error: CreateError('10098','cache error.',500),
    unknown_error: CreateError('10099','unknown error.',500)
};

module.exports = {IBAError: error, IbrainAgeError};