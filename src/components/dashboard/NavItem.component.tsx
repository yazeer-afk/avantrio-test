import { FC } from 'react'
import { getStyledNavIconContainer } from '../../styled-components/dashboard-view.styled'

export interface NavItemProps {
    src: string
    alt: string
    backgroundColor?: string
    placeEnd?: boolean
}

export const NavItem: FC<NavItemProps> = ({ src, alt, backgroundColor, placeEnd, }) => {

    const StyledNavIconContainer = getStyledNavIconContainer(backgroundColor, placeEnd)

    return (
        <StyledNavIconContainer>
            <img src={src} alt={alt} />
        </StyledNavIconContainer>
    )
}

NavItem.defaultProps = {
    backgroundColor: '253244',
    placeEnd: false
}