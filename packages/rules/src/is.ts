import { ValidationRuleFunction } from '@vee-validate/shared';
import { getSingleParam } from './utils';

const isValidator: ValidationRuleFunction = (value: any, params) => {
  const other = getSingleParam(params, 'other');

  return value === other;
};

export default isValidator;