import { FC } from 'react'
import { getStyledFormContainer, getStyledLoginView } from '../../styled-components/login-view.styled'
import { LoginForm } from './LoginForm.component'

export interface LoginViewProps {

}

//Styled components
const StyledLoginView = getStyledLoginView()
const StyledFormContainer = getStyledFormContainer()

export const LoginView: FC<LoginViewProps> = (props) => {

    return (
        <StyledLoginView>
            <StyledFormContainer>
                <h1 className='title'>Hey 👋, Welcome back!</h1>
                <h3 className='subtitle'>Login with your credentials</h3>
                <LoginForm />
            </StyledFormContainer>
        </StyledLoginView>
    )
}