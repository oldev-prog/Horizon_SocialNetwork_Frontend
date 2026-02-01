import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export function ProfileNav() {
  const navItems = [
    { label: 'Timeline', path: '/' },
    { label: 'Media', path: '/media' },
    { label: 'Music', path: '/music' },
    { label: 'Actions', path: '/actions' },
    { label: 'More', path: '/more' },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const serverIndex = navItems.findIndex((item) =>
      item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path)
  );
  const activeIndex = serverIndex !== -1 ? serverIndex : 0;

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDragOffset(e.clientX - rect.left - (rect.width / navItems.length) / 2);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      let newX = e.clientX - rect.left - (rect.width / navItems.length) / 2;

      newX = Math.max(0, Math.min(newX, rect.width - (rect.width / navItems.length)));
      setDragOffset(newX);
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      setIsDragging(false);

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const buttonWidth = rect.width / navItems.length;
        const targetIndex = Math.round(dragOffset / buttonWidth);

        navigate(navItems[targetIndex].path);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, navigate, navItems]);

  const currentLeft = isDragging
      ? `${dragOffset}px`
      : `${activeIndex * 20}%`;

  return (
      <div className="profile_nav" ref={containerRef} style={{ position: 'relative' }}>
        <div
            className="glass_slider"
            onMouseDown={handleMouseDown}
            style={{
              left: currentLeft,
              transform: isDragging ? 'scale(0.98) translateY(1px) ' : 'scale(1)',
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              backdropFilter: isDragging ? 'blur(2px) saturate(200%)' : 'blur(0px) saturate(180%)'
            }}
        ></div>

        {navItems.map((item) => (
            <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className="profile_nav_button"
            >
              {item.label}
            </NavLink>
        ))}
      </div>
  );
}