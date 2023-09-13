import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput, MyCheckbox, MySelect } from '../components';
import '../styles/styles.css'

export const FormikAbstract = () => {

    return (
        <div>
            <h1>Formik Abstract</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    lastName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('Direccion Email Invalida')
                        .required('Requerido'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe de aceptar los terminos y condiciones'),
                    jobType: Yup.string()
                        .required('Requerido')
                        .notOneOf(['it-junior'], 'Opcion Invalida')
                })}
            >

                {(formik) => (
                    <Form>

                        <MyTextInput name='firstName' label="First Name" placeholder='Facundo' />

                        <MyTextInput name='lastName' label="Last Name" placeholder='Sichi' />

                        <MyTextInput name='email' label="Email Address" placeholder='something@mail.com' type='email' />

                        <MySelect name='jobType' label="Job Type">
                            <option value="">Pick Something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-junior">IT Junior</option>
                        </MySelect>

                        <MyCheckbox label='Terms & Conditions' name="terms" />

                        <button type='submit'>Submit</button>

                    </Form>
                )}

            </Formik>

        </div>
    )
}
