import { FC } from 'react'
import { Formik, Form, FormikHelpers, } from 'formik';
import { LoginInput } from './LoginInput.component';
import { getStyledSignInButton } from '../../styled-components/login-view.styled';
import { useDispatch } from 'react-redux';
import { toggleUser } from '../../app/app-actions';

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

    const handleSubmit = (values: IFormVars, ops: FormikHelpers<IFormVars>) => {
        const { setSubmitting } = ops
        dispatch(toggleUser(true))
        setSubmitting(false)
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