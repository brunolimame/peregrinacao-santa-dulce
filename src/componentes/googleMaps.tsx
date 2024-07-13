import React, { useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import dadosProgramacao, { EventType } from './programacaoDados';
const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -12.9714,
    lng: -38.5014
};

const MyMapComponent: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

    return (
        <LoadScript googleMapsApiKey="AIzaSyBiWP-tn5RBtt6OSPtE717WEjdj5-zL-jU">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
            >
                {dadosProgramacao.map((event, index) => (
                    event.location.latitude && event.location.longitude && (
                        <Marker
                            key={index}
                            position={{
                                lat: event.location.latitude,
                                lng: event.location.longitude
                            }}
                            onClick={() => setSelectedEvent(event)}
                        />
                    )
                ))}

                {selectedEvent && (
                    <InfoWindow
                        position={{
                            lat: selectedEvent.location.latitude!,
                            lng: selectedEvent.location.longitude!
                        }}
                        onCloseClick={() => setSelectedEvent(null)}
                    >
                        <div>
                            <h2>{selectedEvent.title}</h2>
                            <p><strong>Data:</strong> {selectedEvent.date}</p>
                            <p><strong>Horário:</strong> {selectedEvent.time}</p>
                            <p><strong>Descrição:</strong> {selectedEvent.description}</p>
                            <p><strong>Endereço:</strong> {selectedEvent.location.address}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default React.memo(MyMapComponent);