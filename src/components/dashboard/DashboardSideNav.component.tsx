import {FC} from 'react'
import { NavItem } from './NavItem.component'

//Images
import logo from '../../assets/logo.png'
import building from '../../assets/building.png'
import camera from '../../assets/camera.png'
import group from '../../assets/group.png'
import bag from '../../assets/bag.png'
import magnify from '../../assets/magnify.png'
import tb from '../../assets/tb.png'


export const DashboardSideNav: FC = () => {

    return(
        <nav>
            <NavItem src={logo} alt='logo' backgroundColor='ff114a'/>
            <NavItem src={building} alt='building'/>
            <NavItem src={camera} alt='camera'/>
            <NavItem src={group} alt='group'/>
            <NavItem src={bag} alt='bag'/>
            <NavItem src={magnify} alt='magnify'/>
            <NavItem src={tb} alt='tb' placeEnd={true}/>
        </nav>
    )
}