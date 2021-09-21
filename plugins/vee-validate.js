// import Vue from 'vue'
// import { ValidationProvider, ValidationObserver, localize, extend } from 'vee-validate' // 使用する機能
// import ja from 'vee-validate/dist/locale/ja.json' // エラーメッセージの日本語化用
// import * as rules from 'vee-validate/dist/rules' // 全てのバリデーションルール

// // forループで全てのバリデーションルールをextendで登録する
// for (let rule in rules) {
//   extend(rule, rules[rule])
// }

// Vue.component('ValidationProvider', ValidationProvider)
// Vue.component('ValidationObserver', ValidationObserver)
// localize('ja', ja)

import Vue from 'vue'
import {
  extend,
  ValidationProvider,
  ValidationObserver,
  // Validator,
  localize
} from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json'
import { required, email, max } from 'vee-validate/dist/rules'

// 日本語
localize('ja', ja)

// 必須
extend('required', required)
// メールアドレス
extend('email', email)
// 文字数上限
extend('max', max)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
