import React, {FormEvent} from 'react';
import '../styles/styles.css'
import {useForm} from "../hooks/useForm";
import {Form, Formik} from "formik";
import * as yup from 'yup'
import {MyTextInput} from "../components";

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Registar Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={values => {
                    console.log(values);
                }}
                validationSchema={yup.object({
                    name: yup.string()
                        .min(2,'Requiere mínimo 2 carácteres')
                        .max(15, 'Requiere máximo 15 carácteres')
                        .required('campo requerido'),
                    email: yup.string()
                        .email('Debe de ser un email válido')
                        .required('Requerido'),
                    password1: yup.string()
                        .min(6,'Requiere mínimo 6 carácteres')
                        .max(15, 'Requiere máximo 15 carácteres')
                        .required('Requerido'),
                    password2: yup.string()
                        .min(6,'Requiere mínimo 6 carácteres')
                        .max(15, 'Requiere máximo 15 carácteres')
                        .oneOf([yup.ref('password1'), null], 'Password no coincide')
                        .required('Requerido'),
                })}
            >
                {
                    (formik) => (
                        <Form >
                            <MyTextInput
                                label="name"
                                name="name"
                                placeholder="nombre"
                            />

                            <MyTextInput
                                label="email"
                                type="email"
                                name="email"
                                placeholder="email"
                            />

                            <MyTextInput
                                label="password"
                                type="password"
                                name="password1"
                                placeholder="password"
                            />

                            <MyTextInput
                                label="password"
                                type="password"
                                name="password2"
                                placeholder="confirm password"
                            />

                            <button type="submit">
                                Submit
                            </button>

                            <button onClick={formik.handleReset} type="button">
                                reset
                            </button>

                        </Form>
                    )
                }

            </Formik>
        </div>
    );
};
