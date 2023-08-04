import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  availability: yup.boolean().required(),
  outlet_id: yup.string().nullable(),
});
