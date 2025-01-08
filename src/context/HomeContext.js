import React, { useState, createContext } from 'react';

const initialHomes = [
  { id: 1, name: 'İzmir Villa', location: 'İzmir', description: 'Dubleks, ferah ve konforlu evim sizler için keyifli bir konaklama fırsatı sunuyor.', status: 'Mevcut', image: require('../images/villa.jpg'), rating: 4.5, visits: 290, rooms: 8, reviews: 5 },
  { id: 2, name: 'Apartman İstanbul', location: 'İstanbul', description: 'Anadolu yakasında tam merkezinde olan evim misafirlerini bekliyor.', status: 'Mevcut', image: require('../images/apartman.jpg'), rating: 5.0, visits: 150, rooms: 3, reviews: 3 },
  { id: 3, name: 'Müstakil Ev - İstanbul', location: 'İstanbul', description: 'Eşsiz manzarayasahip, konforlu ve modern bir müstakil ev.', status: 'Mevcut', image: require('../images/loft.jpg'), rating: 4.9, visits: 104, rooms: 3, reviews: 4 },
  { id: 4, name: 'İzmir Villa', location: 'İzmir', description: 'Güzel villa', status: 'Mevcut', image:  require('../images/villa.jpg'), rating: 4.5, visits: 290, rooms: 8, reviews: 5 },
  { id: 5, name: 'Apartman İstanbul', location: 'İstanbul', description: 'Anadolu yakasında tam merkezinde olan evim misafirlerini bekliyor.', status: 'Mevcut', image:  require('../images/apartman.jpg'), rating: 5.0, visits: 150, rooms: 3, reviews: 3 },
  { id: 6, name: 'Müstakil Ev - İstanbul', location: 'İstanbul', description: 'Eşsiz manzaraya sahip, konforlu ve modern bir müstakil ev.', status: 'Mevcut', image: require('../images/loft.jpg'), rating: 4.9, visits: 104, rooms: 3, reviews: 4 },
  { id: 7, name: 'İzmir Villa', location: 'İzmir', description: 'Güzel villa', status: 'Mevcut', image: require('../images/villa.jpg'), rating: 4.5, visits: 290, rooms: 8, reviews: 5 },
  { id: 8, name: 'Apartman İstanbul', location: 'İstanbul', description: 'Anadolu yakasında tam merkezinde olan evim misafirlerini bekliyor.', status: 'Mevcut', image: require('../images/apartman.jpg'), rating: 5.0, visits: 150, rooms: 3, reviews: 3 },
  { id: 9, name: 'Müstakil Ev - İstanbul', location: 'İstanbul', description: 'Eşsiz manzaraya sahip, konforlu ve modern bir müstakil ev.', status: 'Mevcut', image: require('../images/loft.jpg'), rating: 4.9, visits: 104, rooms: 3, reviews: 4 }
];

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [homes, setHomes] = useState(initialHomes);
  const [offers, setOffers] = useState([]);

  const sendOffer = (homeId) => {
    setHomes((prevHomes) =>
      prevHomes.map((home) =>
        home.id === homeId ? { ...home, status: 'Teklif Gönderildi' } : home
      )
    );
    setOffers((prevOffers) => [...prevOffers, { homeId, status: 'Bekliyor' }]);
  };

  const addHome = (newHome) => {
    setHomes((prevHomes) => [...prevHomes, { ...newHome, id: prevHomes.length + 1 }]);
  };

  return (
    <HomeContext.Provider value={{ homes, sendOffer, addHome, offers }}>
      {children}
    </HomeContext.Provider>
  );
};