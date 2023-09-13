import { Form, Formik } from 'formik'
import * as Yup from 'yup';

import { MyTextInput } from '../components';
import '../styles/styles.css'

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'El nombre debe de ser de 2 caracteres o mas')
                            .max(15, 'El nombre debe de ser menor de 15 caracteres')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Direccion Email Invalida')
                            .required('Requerido'),
                        password1: Yup.string()
                            .required('Requerido')
                            .min(6, 'Debe tener al menos 6 caracteres'),
                        password2: Yup.string()
                            .required('Requerido')
                            .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form>

                            <MyTextInput label="Nombre" name="name" placeholder='Facundo' />
                            <MyTextInput label="Correo Electronico" name="email" type='email' placeholder='Jonh@google.com' />

                            <MyTextInput label="Password" name="password1" type='password' placeholder='****' />
                            <MyTextInput label="Repeat Password" name="password2" type='password' placeholder='****' />

                            <button type="submit">
                                Create
                            </button>

                            <button type="button" onClick={handleReset}>
                                Reset
                            </button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}
