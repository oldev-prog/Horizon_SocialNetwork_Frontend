// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route} from 'react-router-dom';
import './App.css';
import './styles/Buttons.css'
import './styles/Icons.css'
import'./styles/SideBar.css'
import { PostsLayout } from './ProfileElements/components/PostContent /PostsLayout.tsx';
import ProfileLayout from './ProfileElements/ProfileLayout.tsx';
import { MediaContent} from './ProfileElements/components/MediaContent.tsx';
import { MusicContent } from './ProfileElements/components/MusicContent.tsx';
import { ActionsContent } from './ProfileElements/components/ActionsContent.tsx';
import { MoreContent } from './ProfileElements/components/MoreContent.tsx';
import LoginPageLayout from './LoginPageElements/LoginPageLayout.tsx';
import SignupPageLayout from "./signup_page/SignupPageLayout.tsx";
import { PostPage } from "./ProfileElements/components/PostContent /PostPage.tsx";
import { useLocation } from "react-router-dom";

export default function App() {
    const location = useLocation();

    const state = location.state;
    const background = state && state.background;


  return (
      <>
          <Routes location={background || location}>
              <Route path="/login" element={<LoginPageLayout />} />
              <Route path="/signup" element={<SignupPageLayout />} />

              <Route path="/" element={<ProfileLayout />}>
                  <Route index element={<PostsLayout />} />
                  <Route path="posts" element={<PostsLayout />} />
                  <Route path="media" element={<MediaContent />} />
                  <Route path="music" element={<MusicContent />} />
                  <Route path="actions" element={<ActionsContent />} />
                  <Route path="more" element={<MoreContent />} />
              </Route>
          </Routes>

          {background && (
              <Routes>
                  <Route path="/post_media_info" element={<PostPage />} />
              </Routes>
          )}
      </>

  );
}
