import React, { useEffect, useState } from 'react';
import '../style/global.css';
import api from '../services/api';

const Village = ({ name, location, phone, whatsapp="", needs="", createdAt }) => {
    const formatDateToFrench = (dateStr) => {
        const date = new Date(dateStr);
        return new Intl.DateTimeFormat('fr-FR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        }).format(date);
    };

    return(
        <div className="village">
            <div className='village-name'>
                Village : <span>{name}</span>
            </div>
            <div className='village-location'>
                Localisation : <span>{location}</span>
            </div>
            <div className='village-needs'>
                Besoins et infos : <span>{needs}</span>
            </div>
            <div className='village-phone'>
                Téléphone : <span>{phone}</span>
            </div>
            <div className='village-whatsapp'>
                Whatsapp : <span>{whatsapp}</span>
            </div>
            <div className='village-createdat'>
                Annoncé le : <span>{formatDateToFrench(createdAt)}</span>
            </div>
        </div>
    )
}


const Villages = () => {
    
        const [villages, setVillages] = useState([]);
    
        useEffect(() => {
            api.get('/village').then(res => {
                setVillages(res.data);
            }).catch(err => {
                window.notifyRed('Erreur lors de la récupération des villages.');
            })
        }, [])
    
        return(<>
                <a href='/add-village'><div className='button big'>Déclarer un village à secourir</div></a>
                <h2>Villages et zones qui ont besoin d'aide :</h2>
                <div className="villages">
                    {villages.map(village => (
                        <Village name={village.name} location={village.geolocation} phone={village.phone} whatsapp={village.whatsapp} needs={village.needs} createdAt={village.createdAt} />
                    ))}
                </div>
                </>
        )
}

export { Village, Villages} ;