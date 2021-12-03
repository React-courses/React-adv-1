import '../styles/styles.css';
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as yup from 'yup';
import { MyCheckbox ,MyTextInput, MySelect } from '../components/'

export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation tutorial</h1>
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
                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                placeholder="First Name"
                            />

                            <MyTextInput
                                label="last Name"
                                name="lastName"
                                placeholder="Last Name"
                            />


                            <MyTextInput
                                label="Email"
                                name="email"
                                placeholder="...@gmail.com"
                                type="email"
                            />

                            <MySelect label="jobType" name="jobType" options="a">
                                <option value="">pick something</option>
                                <option value="developer">developer</option>
                                <option value="designer">designer</option>
                                <option value="it-senior">it senior</option>
                                <option value="it-junior">it junior</option>
                            </MySelect>

                            <MyCheckbox label="Terms and conditions" name="terms" />

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

