import '../styles/styles.css';
import {useFormik} from "formik";
import * as yup from 'yup';

export const FormikYupPage = () => {

    const {
        handleSubmit, errors, touched, getFieldProps
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },

        onSubmit: values => {
            console.log(values);
        },

        validationSchema: yup.object({
            firstName: yup.string()
                .max(15, 'Debe de tener 15 carácteres o menos')
                .required('Requerido'),
            lastName: yup.string()
                .max(10, 'Debe de tener 10 carácteres o menos')
                .required('Requerido'),
            email: yup.string()
                .email('Debe de ser un email válido')
                .required('Requerido')


        })
    });

    return (
        <div>
            <h1>Formik Yup tutorial</h1>
            <form
                onSubmit={handleSubmit}
                noValidate>
                <label htmlFor="firstName">first name</label>
                <input
                    type="text"
                    {...getFieldProps('firstName')}
                />
                {
                    touched.firstName && errors.firstName &&
                    <span>{errors.firstName}</span>
                }

                <label htmlFor="lasName">last name</label>
                <input
                    type="text"
                    {...getFieldProps('lastName')}
                />
                {
                    touched.lastName && errors.lastName &&
                    <span>{errors.lastName}</span>
                }

                <label htmlFor="email">email address</label>
                <input
                    type="email"
                    {...getFieldProps('email')}
                />
                {
                    touched.email && errors.email &&
                    <span>{errors.email}</span>
                }

                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};
