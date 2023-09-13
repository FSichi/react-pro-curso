import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

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

                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" name="firstName" placeholder="First Name"/>
                        <ErrorMessage name="firstName" component="span" />


                        <label htmlFor="firstName">Last Name</label>
                        <Field type="text" name="lastName" />
                        <ErrorMessage name="lastName" component="span" />

                        <label htmlFor="email">Email Address</label>
                        <Field type="text" name="email" />
                        <ErrorMessage name="email" component="span" />

                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select">
                            <option value="">Pick Something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-junior">IT Junior</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span" />

                        <label>
                            <Field type="checkbox" name="terms" />
                            Terms And Conditions
                        </label>
                        <ErrorMessage name="terms" component="span" />

                        <button type='submit'>Submit</button>

                    </Form>
                )}

            </Formik>

        </div>
    )
}
