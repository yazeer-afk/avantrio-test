import { Dispatch, FC, SetStateAction } from 'react'
import { getStyledMenuItem } from '../../styled-components/dashboard-logs.styled'
import { menuType } from './LogsMenuItemsContainer.component'

export interface MenuItemProps {
    title: string
    type: menuType
    selectedType: menuType
    selectMenu: Dispatch<SetStateAction<menuType>>
}

export const MenuItem: FC<MenuItemProps> = ({ title, type, selectedType, selectMenu }) => {

    const isSelected = type === selectedType
    const StyledMenuItem = getStyledMenuItem(isSelected)

    const handleOnMenuItemClick = () => {
        selectMenu(type)
    }

    return (
        <StyledMenuItem onClick={handleOnMenuItemClick}>
            <span>{title}</span>
            <div />
        </StyledMenuItem>
    )
}