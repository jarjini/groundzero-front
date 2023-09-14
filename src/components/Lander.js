import React, { useState } from 'react';
import '../style/global.css';
import MapComponent from './Map';
import SidebarLeft from './SidebarLeft';
import AssociationPopUp from './Association';
import AddVillage from './AddVillage';
import { Villages } from './Village';
import { MissingPersons } from './MissingPerson';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Lander = () => {
    const [activeTab, setActiveTab] = useState('villages');  // Default to 'villages' tab

    return (
        <>
            <SidebarLeft />
            <div className='lander'>
                <Container>
                    <Row>
                        <Col md={6}>
                        <a href='/add-missing'><div className='button big mt'>Lancer un avis de recherche</div></a>

                        </Col>

                        <Col md={6}>
                        <a href='/add-village'><div className='button big mt'>Déclarer un village à secourir</div></a>
                            </Col>
                    </Row>
                </Container>
              
                <div className='tabs'>    
                    <div 
                        className={`tab ${activeTab === 'villages' ? 'active' : ''}`}
                        onClick={() => setActiveTab('villages')}
                    >
                        Villages à secourir
                    </div>
                    <div 
                        className={`tab ${activeTab === 'missingPersons' ? 'active' : ''}`}
                        onClick={() => setActiveTab('missingPersons')}
                    >
                        Personnes disparues
                    </div>
                </div>
                {activeTab === 'villages' && <Villages />}
                {activeTab === 'missingPersons' && <MissingPersons />}
            </div>
        </>
    );
}

export default Lander;
