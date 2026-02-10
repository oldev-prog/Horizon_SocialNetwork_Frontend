import { Sidebar } from './components/Sidebar.tsx';
import { ProfileHeader } from './components/ProfileHeader.tsx';
import { ProfileInfo } from './components/ProfileInfo.tsx';
import { ProfileNav } from './components/ProfileNav.tsx';
import { Outlet} from 'react-router-dom';
import { ProfileBio } from './components/ProfileBio.tsx';
import './components/styles/ProfileLayout.css'
// import '../styles/Buttons.css'

export default function ProfileLayout() {
  return (
    <div>
      <div className="page_background">
        <div className="page_container">
          <Sidebar />
          <div className="profile_container">
            <div className="profile">
              <ProfileHeader />
              <div className="profile_image"></div>
              <ProfileInfo />
              <ProfileBio />
              <ProfileNav />
            </div>
            <div>
              <Outlet />
            </div>
            <div className="footer">
              <div className="footer_content">
                <span className="footer_title">Horizon</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
