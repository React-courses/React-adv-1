import '../styles/styles.css';
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as yup from 'yup';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Yup tutorial</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={yup.object({
                    firstName: yup.string()
                        .max(15, 'Debe de tener 15 carácteres o menos')
                        .required('Requerido'),
                    lastName: yup.string()
                        .max(10, 'Debe de tener 10 carácteres o menos')
                        .required('Requerido'),
                    email: yup.string()
                        .email('Debe de ser un email válido')
                        .required('Requerido'),
                    terms: yup.boolean()
                        .oneOf([true], 'Debe de aceptar las condiciones')
                        .required('Requerido'),
                    jobType: yup.string()
                        .required('Requerido')
                        .notOneOf(['it-junior'], 'Eesta opción no es permitida')
                })}
            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="firstName">first name</label>
                            <Field name="firstName" type="text" placeholder="first name"/>
                            <ErrorMessage name="firstName" component="span"/>

                            <label htmlFor="lasName">last name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component="span"/>

                            <label htmlFor="email">email address</label>
                            <Field name="email" type="text"/>
                            <ErrorMessage name="email" component="span"/>

                            <label htmlFor="jobType">Job type</label>
                            <Field name="jobType" as="select">
                                <option value="">pick something</option>
                                <option value="developer">developer</option>
                                <option value="designer">designer</option>
                                <option value="it-senior">it senior</option>
                                <option value="it-junior">it junior</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>

                            <label>
                                <Field name="terms" type="checkbox"/>
                                terms and conditions
                            </label>

                            <ErrorMessage name="terms" component="span"/>



                            <button type="submit">
                                Submit
                            </button>
                        </Form>
                    )
                }

            </Formik>

        </div>
    );
};
