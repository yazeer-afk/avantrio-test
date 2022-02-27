import {FC, useState} from 'react'
import { getStyledMenuItemsContainer } from '../../styled-components/dashboard-logs.styled'
import { MenuItem } from './MenuItem.component'

export type menuType = 'ALL' | 'LOCATION' | 'MESSAGE' | 'ALERT' 

export const LogsMenuItemsContainer: FC = (props) => {

    const [selectedMenu, setSelectedMenu] = useState<menuType>('ALL')

    const StyledMenuItemsContainer = getStyledMenuItemsContainer()

    return(
        <StyledMenuItemsContainer>
            <MenuItem title='All' type='ALL' selectedType={selectedMenu} selectMenu={setSelectedMenu}/>
            <MenuItem title='Location' type='LOCATION' selectedType={selectedMenu} selectMenu={setSelectedMenu}/>
            <MenuItem title='Message' type='MESSAGE' selectedType={selectedMenu} selectMenu={setSelectedMenu}/>
            <MenuItem title='Alert' type='ALERT' selectedType={selectedMenu} selectMenu={setSelectedMenu}/>
        </StyledMenuItemsContainer>
    )
}