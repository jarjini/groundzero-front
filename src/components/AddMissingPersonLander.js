import React, { useEffect, useState } from 'react';
import '../style/global.css';
import SidebarLeft from './SidebarLeft';
import AddMissingPerson from './AddMissingPerson';

const AddMissingPersonLander = () => {
    
    return(<>
        <SidebarLeft />
        <div className='lander'>
            <AddMissingPerson />
        </div>
    </>
    )
}

export default AddMissingPersonLander;