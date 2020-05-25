import { validatorCode } from './regCheck.js'
export default function install(Vue) {
    Vue.prototype.regCheck = function (item) {
        let rules = []
        let _trigger = item.trigger || 'blur'
        let _required = item.required || false
        let _type = item.type

        if (_required) {
            rules.push({
                required: true,
                validator: validatorCode.checkNotNull.bind(item),
                trigger: _trigger
            })
        }
        if (_type) {
            switch (_type) {
                // 手机校验
                case 'mobile':
                    rules.push({
                        required: _required,
                        validator: validatorCode.checkMobile,
                        trigger: _trigger
                    })
                    break
                // 邮箱校验
                case 'email':
                    rules.push({
                        required: _required,
                        validator: validatorCode.checkEmail,
                        trigger: _trigger
                    })
                    break
                // 身份证校验
                case 'idCard':
                    rules.push({
                        required: _required,
                        validator: validatorCode.checkIdCard,
                        trigger: _trigger
                    })
                    break
                default:
                    rules.push({})
                    break
            }
        }
        return rules
    }
}