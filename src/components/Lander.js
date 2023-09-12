import React, { useEffect, useState } from 'react';
import '../style/global.css';
import MapComponent from './Map';
import SidebarLeft from './SidebarLeft';
import AssociationPopUp from './Association';
import AddVillage from './AddVillage';
import { Villages } from './Village';

const Lander = () => {
    /*return (
        <div className="lander">
            <h1>GroundZero.ma</h1>
            <p>We're dedicated to directly supporting local associations and volunteers, ensuring they have the funds to act promptly on the ground. Donations are transparently directed to verified groups. Soon, our interactive map will provide real-time visuals of operations as they unfold.</p>
        </div>
    );*/

    return(<>
        <SidebarLeft />
        <div className='lander'>
            <Villages />
        </div>
    </>
    )
}

export default Lander;