import React, { useEffect, useState } from 'react';
import '../style/global.css';
import api from '../services/api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const AddVillage = () => {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [info, setInfo] = useState('');
    const [phone, setPhone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const cleanForm = () => {
        setName('');
        setLocation('');
        setInfo('');
        setPhone('');
        setWhatsapp('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        api.post('/village', {
            name: name,
            geolocation: location,
            needs: info,
            phone: phone,
            whatsapp: whatsapp
        }).then(res => {
            window.notify('Village ajouté avec succès.');
            cleanForm();
        }).catch(err => {
            window.notifyRed('Erreur lors de l\'ajout du village.');
        })
    }

    return(<>
          <Container>
            <form className="add-village mt-40">
            <Row>
                <Col md={12}>
                
                <div className='form-tab'>
                    <div className='form-tab-title'>Nom du village :</div>
                    <div className='form-tab-content'>
                        <input type='text' className='form-tab-input' value={name} onChange={e => setName(e.target.value)} placeholder='Nom du village' />
                    </div>
                </div>
                </Col>
                <Col md={12}>
                <div className='form-tab'>
                    <div className='form-tab-title'>Localisation :</div>
                    <div className='form-tab-content'>
                        <input type='text' className='form-tab-input' placeholder='Lien Google Maps ' value={location} onChange={e => setLocation(e.target.value)} />
                    </div>
                </div>
                </Col>
                <Col md={12}>
                <div className='form-tab'>
                    <div className='form-tab-title'>Besoins et informations : (facultatif)</div>
                    <div className='form-tab-content'>
                        <textarea className='form-tab-input' placeholder='Informations complémentaires' value={info} onChange={e => setInfo(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                </Col>
                <Col md={6}>
                <div className='form-tab'>
                    <div className='form-tab-title'>Téléphone :</div>
                    <div className='form-tab-content'>
                        <input type='text' className='form-tab-input' placeholder='Numéro de téléphone' value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                </div>
                </Col>
                <Col md={6}>
                <div className='form-tab'>
                    <div className='form-tab-title'>Whatsapp : (facultatif)</div>
                    <div className='form-tab-content'>
                        <input type='text' className='form-tab-input' placeholder='Numéro de téléphone' value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                    </div>
                </div>
                </Col>
                <Col md={6}>
                <div className='form-tab'>
                    <a href='/'><div className='btn btn-success retour'> {'< Retour'}</div></a>
                </div>
                </Col>
                <Col md={6}>
                <div className='form-tab'>
                    <button type='submit' className='btn btn-default form-tab-submit' onClick={handleSubmit}>Soumettre</button>
                </div>
                </Col>
                </Row>
                
        </form>
        </Container>
        </>
    )
}

export default AddVillage;