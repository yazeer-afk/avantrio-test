import { FC } from 'react'
import { getStyledInputContainer } from '../../styled-components/login-view.styled'
import { Field, ErrorMessage } from 'formik';

export interface LoginInputProps {
    placeholder: string
    type: 'email' | 'password' | 'text'
    name: string
}

const StyledInputContainer = getStyledInputContainer()

export const LoginInput: FC<LoginInputProps> = ({placeholder, type, name}) => {

    return (
        <StyledInputContainer>
            <Field type={type} name={name} placeholder={placeholder}/>
            <ErrorMessage name={name} component="span" />
        </StyledInputContainer>
    )
}