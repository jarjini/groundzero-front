import React, { useEffect, useState } from 'react';
import '../style/global.css';
import SidebarLeft from './SidebarLeft';
import AddVillage from './AddVillage';

const AddVillageLander = () => {
    
    return(<>
        <SidebarLeft />
        <div className='lander'>
            <AddVillage />
        </div>
    </>
    )
}

export default AddVillageLander;