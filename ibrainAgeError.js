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
    read_file_error: CreateError('10012','read file error.',500),
    file_type_error: CreateError('10013','file type error.',401),
    invalid_pay_type: CreateError('10014','invalid pay type.',401),
    invalid_pay_channel: CreateError('10015','invalid pay channel.',401),
    file_upload_error: CreateError('10016','file upload error.',500),
    file_download_error: CreateError('10017','file download error.',500),
    pingpp_sdk_error: CreateError('10018','pingpp charge error.',500),
    wechat_auth_error: CreateError('10019','wechat auth error.',401),
    jpush_sdk_error: CreateError('10020','jpush sdk error.',500),
    invalid_receipt_data: CreateError('10021','invalid receipt data.',400),
    invalid_app_id: CreateError('10022','invalid app id.',400),
    order_has_disposed: CreateError('10023','order has disposed.',400),
    invalid_apple_goods_id: CreateError('10024','invalid apple goods id.',400),
    password_wrong: CreateError('10025','password wrong.',400),
    resource_already_in_use: CreateError('10026','resource already in use.',400),
    file_name_error: CreateError('10027','file name error.',400),
    already_point: CreateError('10028','already point.',400),
    jekyll_build_error: CreateError('10029','jekyll build error.',500),
    already_answered: CreateError('10030','already answered.',400),
    invalid_action_type: CreateError('10031','invalid action type.',400),
    invalid_baby_id: CreateError('10032','invalid baby id.',400),
    already_time_out: CreateError('10033','already time out.',400),
    already_replied: CreateError('10034','already replied.',400),
    already_praised: CreateError('10035','already praised.',400),
    invalid_share_type: CreateError('10036','invalid share type.',400),
    invalid_content_type: CreateError('10037','invalid content type.',400),
    age_out_of_range: CreateError('10038','age out of range.',401),
    ability_data_not_exist: CreateError('10039','ability data not exist.',401),
    game_data_not_exist: CreateError('10040','game data not exist.',401),
    game_level_count_error: CreateError('10041','game level count error.',401),
    teacher_not_exist: CreateError('10042','teacher not exist.',401),
    wechat_api_error: CreateError('10043','wechat api error.',500),
    invalid_redeem_code: CreateError('10044','invalid redeem code.',401),
    redeem_code_expired: CreateError('10045','redeem code expired.',401),
    redeem_code_already_used: CreateError('10046','redeem code already used.',401),
    only_vip_can_use: CreateError('10047','only vip can use.',401),
    only_new_user_can_use: CreateError('10048','only new user can use.',401),
    create_excel_error: CreateError('10049','create excel error.',500),
    create_qrcode_error: CreateError('10050','create qrcode error.',500),
    token_not_latest: CreateError('10051','token not latest.',401),
    code_amount_error: CreateError('10052','codes amount must less than 50000.',401),
    invalid_baby_id: CreateError('10053','invalid baby id.',401),
    message_amount_error: CreateError('10055','message amount error.',401),
    no_users_for_import: CreateError('10056','no users for import.',401),
    refund_money_error: CreateError('10057','refund money must be equal or lesser than pay money.',401),
    refund_pay_type_error: CreateError('10058','pay type must be wx or wx_pub or alipay.',401),
    order_status_error: CreateError('10059','order status error.',401),
    action_version_error: CreateError('10060','action version error.',401),
    answer_not_change: CreateError('10061','answer not change.',401),
    already_favorited: CreateError('10062','already favorited.',401),
    already_added: CreateError('10063','already added.',401),
    invalid_pay_type: CreateError('10064','invalid pay type.',401),
    get_video_size_error: CreateError('10065','get video size error.',500),
    deeplink_service_error: CreateError('10066','deeplink service error.',500),
    repetitive_request: CreateError('10067','repetitive request.',401),
    cash_amount_error: CreateError('10068','cash_amount error.',401),
    cash_times_limit: CreateError('10069','cash times must be equal or lesser than 3 per day.',401),
    money_not_enough: CreateError('10070','money not enough.',500),

    cache_error: CreateError('10098','cache error.',500),
    unknown_error: CreateError('10099','unknown error.',500)
};

module.exports = {IBAError: error, IbrainAgeError};