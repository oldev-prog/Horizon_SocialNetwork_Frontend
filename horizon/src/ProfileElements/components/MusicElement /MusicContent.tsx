import { useState } from "react";
import "./MusicContentStyles.css";
import { Header } from "./Header.tsx";

// import { TrackItem } from "./TrackItem.tsx";

interface Track {
    id: number;
    title: string;
    artist: string;
    duration: string;
}

interface Playlist {
    id: number;
    title: string;
    songs_number: number;
    img_src: string;
    type: string;
}

interface Podcast {
    id: number;
    title: string;
    duration: number;
    img_src: string;
}

interface Artist {
    id: number;
    title: string;
    img_src: string;
}


const tracksData: Track[] = [
    { id: 1, title: "Eclipse", artist: "Luma", duration: "3:42" },
    { id: 2, title: "Starlight", artist: "Nova", duration: "4:05" },
    { id: 3, title: "Neon Dreams", artist: "Echo", duration: "2:58" },
    { id: 4, title: "Midnight Run", artist: "Volt", duration: "3:30" },
    { id: 5, title: "Aurora", artist: "Skyline", duration: "4:12" },
    { id: 6, title: "Eclipse", artist: "Luma", duration: "3:42" },
    { id: 7, title: "Starlight", artist: "Nova", duration: "4:05" },
    { id: 8, title: "Neon Dreams", artist: "Echo", duration: "2:58" },
    { id: 9, title: "Midnight Run", artist: "Volt", duration: "3:30" },
    { id: 10, title: "Aurora", artist: "Skyline", duration: "4:12" },
    { id: 11, title: "Eclipse", artist: "Luma", duration: "3:42" },
    { id: 12, title: "Starlight", artist: "Nova", duration: "4:05" },
    { id: 13, title: "Neon Dreams", artist: "Echo", duration: "2:58" },
    { id: 14, title: "Midnight Run", artist: "Volt", duration: "3:30" },
    { id: 15, title: "Aurora", artist: "Skyline", duration: "4:12" },
    { id: 16, title: "Eclipse", artist: "Luma", duration: "3:42" },
    { id: 17, title: "Starlight", artist: "Nova", duration: "4:05" },
    { id: 18, title: "Neon Dreams", artist: "Echo", duration: "2:58" },
    { id: 19, title: "Midnight Run", artist: "Volt", duration: "3:30" },
    { id: 1, title: "Eclipse", artist: "Luma", duration: "3:42" },
    { id: 2, title: "Starlight", artist: "Nova", duration: "4:05" },
    { id: 3, title: "Neon Dreams", artist: "Echo", duration: "2:58" },
    { id: 4, title: "Midnight Run", artist: "Volt", duration: "3:30" },
    { id: 5, title: "Aurora", artist: "Skyline", duration: "4:12" },
    { id: 6, title: "Eclipse", artist: "Luma", duration: "3:42" },
    { id: 7, title: "Starlight", artist: "Nova", duration: "4:05" },
    { id: 8, title: "Neon Dreams", artist: "Echo", duration: "2:58" },
    { id: 9, title: "Midnight Run", artist: "Volt", duration: "3:30" },
    { id: 10, title: "Aurora", artist: "Skyline", duration: "4:12" },
    { id: 11, title: "Eclipse", artist: "Luma", duration: "3:42" },
    { id: 12, title: "Starlight", artist: "Nova", duration: "4:05" },
    { id: 13, title: "Neon Dreams", artist: "Echo", duration: "2:58" },
    { id: 14, title: "Midnight Run", artist: "Volt", duration: "3:30" },
    { id: 15, title: "Aurora", artist: "Skyline", duration: "4:12" },
    { id: 16, title: "Eclipse", artist: "Luma", duration: "3:42" },
    { id: 17, title: "Starlight", artist: "Nova", duration: "4:05" },
    { id: 18, title: "Neon Dreams", artist: "Echo", duration: "2:58" },
    { id: 19, title: "Midnight Run", artist: "Volt", duration: "3:30" },
];

const playlistsData: Playlist[] = [
    {id:1, title: "Liked Songs", songs_number:46, img_src:"/icons/liked_songs1.jpg", type:"liked_songs"},
    {id:2, title: "日本の音楽", songs_number:24, img_src:"/icons/anime_music.png", type:"regular"},
    {id:3, title: "MetalCore", songs_number:68, img_src:"/icons/metalcore.jpg", type:"regular"},
    {id:4, title: "Classical Music", songs_number:267, img_src:"/icons/classical_music.jpeg", type:"regular"},
    {id:5, title: "Old Rock", songs_number:12, img_src:"/icons/old_rock.jpg", type:"regular"},
    {id:6, title: "Electronic Music", songs_number:79, img_src:"/icons/electronic_music.jpeg", type:"regular"},
]

const podcastsData: Podcast[] = [
    {id:1, title: "BBC Learning English", duration:46, img_src:"/icons/bbc.jpg"},
    {id:2, title: "Japanese Podcast", duration:24, img_src:"/icons/japanese.jpeg"},
]

const artistsData: Artist[] = [
    {id:1, title: "Bad Omens", img_src:"/icons/bad_omens.jpg"},
    {id:2, title: "Slipknot", img_src:"/icons/slipknot.jpg"},
]

export function MusicContent() {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = (track: Track) => {
        if (currentTrack?.id === track.id) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentTrack(track);
            setIsPlaying(true);
        }
    };

    return (
        <div className="music_page_container">
            <div className="music_container">
                <Header />

                <div className="tracks_list">
                    {tracksData.map((track) => (
                        <div
                            key={track.id}
                            className={`track_item ${
                                currentTrack?.id === track.id ? "active" : ""
                            }`}
                            onClick={() => handlePlay(track)}
                        >
                            <div className="track_play">
                                <img
                                    className={`music_icon ${currentTrack?.id === track.id && isPlaying ? "playing" : ""}`}
                                    src={
                                        currentTrack?.id === track.id && isPlaying
                                            ? "/icons/icon-pause.png"
                                            : "/icons/icon_play.png"
                                    }
                                />
                            </div>
                            <div className="track_info">
                                <span className="track_title">{track.title}</span>
                                <span className="track_artist">{track.artist}</span>
                            </div>
                            <div className="track_duration">{track.duration}</div>

                            <button className="music_more track_more">
                                <img
                                    className="more_icon"
                                    src="/icons/icon_more.png"
                                    alt="more"
                                />
                            </button>
                        </div>
                    ))}
                </div>

                {currentTrack && (
                    <div className="player_bar">
                        <div className="player_info">
                            <span className="player_title">{currentTrack.title}</span>
                            <span className="player_artist">{currentTrack.artist}</span>
                        </div>
                        <button
                            className="player_play"
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            {isPlaying ? "⏸️" : <img src="/icons/icon_play.png" />}
                        </button>
                    </div>
                )}
            </div>
            <div className="playlists_container">
                <h2 className="playlists_header">Playlists</h2>
                <div className="playlists_list">
                    {playlistsData.map((playlist) => (
                        <div
                            key={playlist.id}
                            className={`playlist_item ${
                                currentTrack?.id === playlist.id ? "active" : ""
                            }`}
                        >
                            <div className="playlist_info">
                                <img className={`listitem_img ${playlist.type}`} src={playlist.img_src}/>
                                <span className="playlist_title">{playlist.title}</span>
                                <span className="songs_number">{playlist.songs_number}</span>
                                <button className="music_more">
                                    <img className="more_icon playlist" src="/icons/icon_more.png" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className="podcasts_header">Artists</h2>
                <div className="podcasts_list">
                    {artistsData.map((artist) => (
                        <div
                            key={artist.id}
                            className={`podcast_item ${
                                currentTrack?.id === artist.id ? "active" : ""
                            }`}
                        >
                            <div className="artist_info">
                                <img className="listitem_img" src={artist.img_src}/>
                                <span className="podcast_title">{artist.title}</span>
                                <button className="music_more">
                                    <img className="more_icon" src="/icons/icon_more.png" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className="podcasts_header">Podcasts</h2>
                <div className="podcasts_list">
                    {podcastsData.map((podcast) => (
                        <div
                            key={podcast.id}
                            className={`podcast_item ${
                                currentTrack?.id === podcast.id ? "active" : ""
                            }`}
                        >
                            <div className="podcast_info">
                                <img className="listitem_img" src={podcast.img_src}/>
                                <span className="podcast_title">{podcast.title}</span>
                                <button className="music_more">
                                    <img className="more_icon" src="/icons/icon_more.png" />
                                </button>
                                {/*<span className="podcast_duration">{podcast.duration}</span>*/}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}



// import "./MusicContentStyles.css"
// import { TrackItem } from "./TrackItem"
//
// type Track = {
//     id: number
//     title: string
//     artist: string
//     duration: string
// }
//
// type Playlist = {
//     id: number
//     title: string
//     songs_number: number
//     img_src: string
// }
//
// type Artist = {
//     id: number
//     name: string
// }
//
// type Podcast = {
//     id: number
//     title: string
// }
//
// const tracks: Track[] = [
//     { id: 1, title: "Shadow of the Day", artist: "Linkin Park", duration: "4:49" },
//     { id: 2, title: "Numb", artist: "Linkin Park", duration: "3:07" },
//     { id: 3, title: "Breaking the Habit", artist: "Linkin Park", duration: "3:16" }
// ]
//
// const playlists: Playlist[] = [
//     { id: 1, title: "Liked Songs", songs_number: 46, img_src: "/icons/icon_heart0.png" },
//     { id: 2, title: "日本の音楽", songs_number: 24, img_src: "/icons/anime_music.png" }
// ]
//
// const artists: Artist[] = [
//     { id: 1, name: "Linkin Park" },
//     { id: 2, name: "Bring Me The Horizon" }
// ]
//
// const podcasts: Podcast[] = [
//     { id: 1, title: "Frontend Talks" },
//     { id: 2, title: "Tech Weekly" }
// ]
//
// export function MusicContent() {
//     return (
//         <div className="music_content">
//
//             {/* TRACKS */}
//             <section className="music_section">
//                 <h3 className="music_section_title">Tracks</h3>
//
//                 {tracks.map(track => (
//                     <TrackItem key={track.id} track={track} />
//                 ))}
//             </section>
//
//             {/* PLAYLISTS */}
//             <section className="music_section">
//                 <h3 className="music_section_title">Playlists</h3>
//
//                 {playlists.map(playlist => (
//                     <div
//                         key={playlist.id}
//                         className="music_item playlist_item"
//                     >
//                         <img
//                             className="playlist_img"
//                             src={playlist.img_src}
//                             alt=""
//                         />
//                         <div className="playlist_info">
//                             <span className="playlist_title">{playlist.title}</span>
//                             <span className="playlist_count">
//                                 {playlist.songs_number} songs
//                             </span>
//                         </div>
//                     </div>
//                 ))}
//             </section>
//
//             {/* ARTISTS */}
//             <section className="music_section">
//                 <h3 className="music_section_title">Artists</h3>
//
//                 {artists.map(artist => (
//                     <div
//                         key={artist.id}
//                         className="music_item artist_item"
//                     >
//                         <span className="artist_name">{artist.name}</span>
//                     </div>
//                 ))}
//             </section>
//
//             {/* PODCASTS */}
//             <section className="music_section">
//                 <h3 className="music_section_title">Podcasts</h3>
//
//                 {podcasts.map(podcast => (
//                     <div
//                         key={podcast.id}
//                         className="music_item podcast_item"
//                     >
//                         <span className="podcast_title">{podcast.title}</span>
//                     </div>
//                 ))}
//             </section>
//
//         </div>
//     )
// }

