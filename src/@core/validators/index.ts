import { defineRule, configure } from 'vee-validate';
import { required, email, min, max, confirmed, integer } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

//NOTE - DEFINE RULES
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);
defineRule('confirmed', confirmed);
defineRule('integer', integer);

//NOTE - CUSTOM ERROR MESSAGE
configure({
  generateMessage: localize('en', {
    messages: {
      required: '{field} is required',
      email: '{field} must be a valid',
      min: '{field} character must be more than 0:{min} character',
      max: '{field} characters must be less than 0:{max} character',
      confirmed: '{field} does not match',
      integer: '{field} must be an number',
    },
  }),
})