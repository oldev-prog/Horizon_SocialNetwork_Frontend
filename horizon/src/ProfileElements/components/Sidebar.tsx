import { useState } from 'react';

const menuIcons = [
  { src: '/icons/icon_menu2.svg', type: 'svg', label: 'Menu', isMenu: true }, // Пометка для бургера
  { src: '/icons/icon_home3.svg', type: 'svg', label: 'Home' },
  { src: '/icons/icon_profile2.png', type: 'png', label: 'Profile' },
  { src: '/icons/icon_feed.png', type: 'png', label: 'Feed' },
  { src: '/icons/icon_friends.png', type: 'png', label: 'Friends' },
  { src: '/icons/icon_communication.png', type: 'png', label: 'Messages' },
  { src: '/icons/icon_music.png', type: 'png', label: 'Music' },
  { src: '/icons/icon_settings.svg', type: 'svg', label: 'Settings' },
];

// export function Sidebar() {
//   return (
//     <div className="side_bar">
//       {menuIcons.map((icon, index) => (
//         <button key={index} className="side_bar_button">
//           <img className={`icon_${icon.type}`} src={icon.src} alt="nav icon" />
//         </button>
//       ))}
//     </div>
//   );
// }

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`side_bar ${isOpen ? 'open' : ''}`}>
      {menuIcons.map((icon, index) => (
        <button
          key={index}
          className="side_bar_button"
          onClick={icon.isMenu ? () => setIsOpen(!isOpen) : undefined}
        >
          <img className={`icon_${icon.type}`} src={icon.src} alt="nav icon" />
          <p className="side_bar_label">{icon.label}</p>
        </button>
      ))}
    </div>
  );
}