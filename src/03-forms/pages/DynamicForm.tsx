import formJson from '../data/custom-form.json';
import {Form, Formik} from "formik";
import {MySelect, MyTextInput} from "../components";
import * as Yup from 'yup';

// console.log(formJson);

const initialValues: {[key:string]:any} = {}
const requiredFields: {[key:string]:any} ={}

for (const input of formJson) {
    initialValues[input.name] = input.value;


    if(!input.validations) continue;

    let schema = Yup.string();
    for (const rule of input.validations) {
        if(rule.type === 'required'){
            schema = schema.required('campo requerido');
        }

        if(rule.type === 'minLength'){
            schema = schema.min((rule as any).value || 1, `Mínimo de ${(rule as any).value || 1} carácteres`)
        }

        if(rule.type === 'email'){
            schema = schema.email('Email debe ser válido')
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    console.log(values);
                }}
                validationSchema={ validationSchema }
            >
                {
                    (formik) => (
                        <Form noValidate>
                            {
                                formJson.map(({name, type, placeholder, label, options}) => {
                                    if(type === 'input' || type === 'password'
                                        || type === 'email') {
                                        return (<MyTextInput
                                            key={name}
                                            type={(type as any)}
                                            label={label}
                                            placeholder={placeholder}
                                            name={name}/>)
                                    } else if (type === 'select') {
                                        return (<MySelect
                                            key={name}
                                            label={label}
                                            name={name}>
                                            <option disabled value="">Select an option</option>
                                            {
                                                options?.map(({id, label}) => (
                                                    <option key={id} value={id}>{label}</option>
                                                ))
                                            }
                                            </MySelect>)
                                    }
                                    throw new Error(`el tipo ${type} no es soportado`);
                                })
                            }
                            <button type="submit">
                                submit
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};

