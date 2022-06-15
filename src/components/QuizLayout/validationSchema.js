import * as yup from 'yup';

export const questionValidationSchema = yup.object({
  id: yup.string(),
  title: yup.string().required('Title is required'),
  incorrectAnswers: yup
    .array()
    .of(yup.string().required('Answer is required'))
    .min(3)
    .max(3),
  rightAnswer: yup.string().required('Answer is required'),
});

const validationSchema = yup.object({
  image: yup
    .mixed()
    .test('empty-check', 'Choose an image', (image) => image.name),
  section: yup.string('Enter section').required('Section is required'),
  nameOfQuiz: yup.string('Enter name').required('Name is required'),
  description: yup
    .string('Enter description')
    .required('Description is required'),
  questions: yup.array().of(questionValidationSchema),
  time: yup.string().required('Time is required'),
});

export default validationSchema;
