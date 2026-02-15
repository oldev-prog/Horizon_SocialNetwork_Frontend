// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route} from 'react-router-dom';
import './App.css';
import './styles/Buttons.css'
import './styles/Icons.css'
import'./styles/SideBar.css'
import { ProfileContent } from "./ProfileElements/components/ProfileContent.tsx";
import ProfileLayout from './ProfileElements/ProfileLayout.tsx';
import { MediaContent} from './ProfileElements/components/MediaContent /MediaContent.tsx';
import { MusicContent } from './ProfileElements/components/MusicElement /MusicContent.tsx';
import { ActionsContent } from './ProfileElements/components/ActionsContent.tsx';
import { MoreContent } from './ProfileElements/components/MoreContent.tsx';
import LoginPageLayout from './LoginPageElements/LoginPageLayout.tsx';
import SignupPageLayout from "./signup_page/SignupPageLayout.tsx";
import { PostPage } from "./PostElements /PostPage/PostPage.tsx";
import { useLocation } from "react-router-dom";
import { MediaContentPage } from "./ProfileElements/components/MediaContent /MediaContentPage.tsx";
import { EmailVerificationPage } from "./signup_page/EmailVarificstionPage.tsx";

export default function App() {
    const location = useLocation();

    const state = location.state;
    const background = state && state.background;

  return (
      <>
          <Routes location={background || location}>
              <Route path="/login" element={<LoginPageLayout />} />
              <Route path="/signup" element={<SignupPageLayout />} />
              <Route path="/verification-success" element={<EmailVerificationPage />} />

              <Route path="/" element={<ProfileLayout />}>
                  <Route index element={<ProfileContent />} />
                  <Route path="timeline" element={<ProfileContent />} />
                  <Route path="media" element={<MediaContent />} />
                  <Route path="p/:id" element={<MediaContentPage />} />
                  <Route path="music" element={<MusicContent />} />
                  <Route path="actions" element={<ActionsContent />} />
                  <Route path="more" element={<MoreContent />} />
              </Route>

          </Routes>

          {background && (
              <Routes>
                  <Route path="/post_media_info" element={<PostPage />} />
                  <Route path="p/:id" element={<MediaContentPage />} />
              </Routes>
          )}

      </>

  );
}
