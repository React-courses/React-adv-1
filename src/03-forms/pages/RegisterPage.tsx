import React, {FormEvent} from 'react';
import '../styles/styles.css'
import {useForm} from "../hooks/useForm";


export const RegisterPage = () => {

    const {name, email, password1, password2, formData, hangleChange, resetForm, isValidEmail}
        = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Registar Page</h1>
            <form
                noValidate
                onSubmit={onSubmit}
            >



                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={name}
                    onChange={hangleChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {
                    name.trim().length <= 0
                    && <span>Este campo es necesario</span>
                }


                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={hangleChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {
                    !isValidEmail(email)
                    && <span>Este campo es necesario</span>
                }

                <input
                    type="password"
                    placeholder="password"
                    name="password1"
                    value={password1}
                    onChange={hangleChange}
                />
                {
                    password1.trim().length <= 0
                    && <span>Este campo es necesario</span>
                }
                {
                    password1.trim().length < 6 && password1.trim().length > 0
                    && <span>La contraseña tiene q tener 6 cáracteres</span>
                }
                {
                    password2.trim().length > 0 && password1 !== password2
                    && <span>Las contraseñas tienen que ser iguales </span>
                }


                <input
                    type="password"
                    placeholder="Repeat password"
                    name="password2"
                    value={password2}
                    onChange={hangleChange}
                />
                {
                    password2.trim().length <= 0
                    && <span>Este campo es necesario</span>
                }
                {
                    password2.trim().length < 6 && password1.trim().length > 0
                    && <span>La contraseña tiene q tener 6 cáracteres</span>
                }
                {
                    password1.trim().length > 0 && password1 !== password2
                    && <span>Las contraseñas tienen que ser iguales </span>
                }

                <button type="submit">
                    Create
                </button>

                <button type="button" onClick={resetForm}>
                    reset
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
