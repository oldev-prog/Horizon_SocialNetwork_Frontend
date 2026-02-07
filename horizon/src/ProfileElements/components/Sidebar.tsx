// import { useState } from 'react';

const menuIcons = [
  // { src: '/icons/icon_menu2.svg', type: 'svg', label: 'Menu', isMenu: true }, // Пометка для бургера
  { src: '/icons/icon_home4.png', type: 'svg', label: 'Home' },
  { src: '/icons/icon_profile3.png', type: 'png', label: 'Profile' },
  // { src: '/icons/icon_feed.png', type: 'png', label: 'Feed' },
  { src: '/icons/icon_soulmates3.png', type: 'png', label: 'Soulmates' },
  { src: '/icons/icon_communication2.png', type: 'png', label: 'Chat' },
  { src: '/icons/icon_music4.png', type: 'png', label: 'Music' },
  { src: '/icons/icon_ai.png', type: 'png', label: 'AI' },
  { src: '/icons/icon_settings3.png', type: 'svg', label: 'Settings' },
];

// export function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);
//
//   return (
//     <div className={`side_bar ${isOpen ? 'open' : ''}`}>
//       {menuIcons.map((icon, index) => (
//         <button
//           key={index}
//           className="side_bar_button"
//           onClick={icon.isMenu ? () => setIsOpen(!isOpen) : undefined}
//         >
//           <img className={`icon_${icon.type}`} src={icon.src} alt="nav icon" />
//           <p className="side_bar_label">{icon.label}</p>
//         </button>
//       ))}
//     </div>
//   );
// }

import { useState } from "react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div
          className={`side_bar ${isOpen ? "open" : ""}`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
      >
        {menuIcons.map((icon, index) => (
            <button key={index} className="side_bar_button">
              <img className={`icon_${icon.type}`} src={icon.src} alt="nav icon" />
              <p className="side_bar_label">{icon.label}</p>
            </button>
        ))}
      </div>
  );
}
