import { FC } from 'react'
import { Formik, Form, FormikHelpers, } from 'formik';
import { LoginInput } from './LoginInput.component';
import { getStyledSignInButton } from '../../styled-components/login-view.styled';
import { useDispatch } from 'react-redux';
import axios from 'axios'; 
import { setToken } from '../../app/app-actions';
import { infoToast } from '../../util/toast-messages';

export interface LoginFormProps {

}

interface IFormVars {
    username?: string
    password?: string
}

const StyledSignInButton = getStyledSignInButton()

export const LoginForm: FC<LoginFormProps> = (props) => {

    const dispatch = useDispatch()

    const initialValues: IFormVars = {
        username: '',
        password: ''
    }

    const validateForm = (values: IFormVars): IFormVars => {
        const errors: IFormVars = {};
        if (!values.username) {
            errors.username = 'Username is required!';
        }

        if (!values.password) {
            errors.password = 'Password is required!'
        }
        return errors;
    }

    const handleSubmit = async (values: IFormVars, ops: FormikHelpers<IFormVars>) => {
        const { setSubmitting } = ops

        try {
            setSubmitting(true)
            infoToast('Signing you in. Please wait!')
            const response = await axios.post('http://apps.avantrio.xyz:8010/api/user/login', values)
            const token = response.data.token as string
            dispatch(setToken(token))
        } catch (error) {
            console.error(error)
        } finally {

            setSubmitting(false)
        }

    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={validateForm}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <LoginInput name='username' placeholder='Username' type='text' />
                        <LoginInput name='password' placeholder='Password' type='password' />

                        <StyledSignInButton type='submit' disabled={isSubmitting}>
                            Sign In
                        </StyledSignInButton>
                    </Form>
                )}
            </Formik>
        </div>
    )
}