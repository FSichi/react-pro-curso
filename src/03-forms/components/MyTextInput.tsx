import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any; //para que no de error en el resto de props
}

export const MyTextInput = ({ label, ...props }: Props) => {

    const [field] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
