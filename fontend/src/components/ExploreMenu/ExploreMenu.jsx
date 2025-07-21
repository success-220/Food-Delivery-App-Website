import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Take a look at our mouth-watering menu and find your next favorite meal</h1>
      <p className='explore-menu-test'>
        Explore our full menu of flavorful dishes and enjoy fast, reliable delivery. All for a small delivery fee that ensures your meal arrives fresh and on time.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            key={index}
            className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`}
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
