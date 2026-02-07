import { useState } from "react";
import "./MusicContentStyles.css";

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
];

const playlistsData: Playlist[] = [
    {id:1, title: "Liked Songs", songs_number:46},
    {id:2, title: "Liked Songs", songs_number:24},
    {id:3, title: "Liked Songs", songs_number:68},
    {id:4, title: "Liked Songs", songs_number:267},
    {id:5, title: "Liked Songs", songs_number:12},
    {id:6, title: "Liked Songs", songs_number:79},
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
                <h2 className="music_header">Liked Songs</h2>

                <div className="tracks_list">
                    {tracksData.map((track) => (
                        <div
                            key={track.id}
                            className={`track_item ${
                                currentTrack?.id === track.id ? "active" : ""
                            }`}
                            onClick={() => handlePlay(track)}
                        >
                            <div className="track_info">
                                <span className="track_title">{track.title}</span>
                                <span className="track_artist">{track.artist}</span>
                            </div>
                            <div className="track_duration">{track.duration}</div>
                            <div className="track_play">
                                {currentTrack?.id === track.id && isPlaying ? "⏸️" : "▶️"}
                            </div>
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
                            {isPlaying ? "⏸️" : "▶️"}
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
                                <span className="playlist_title">{playlist.title}</span>
                                <span className="songs_number">{playlist.songs_number}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className="podcasts_header">Podcasts</h2>
            </div>
        </div>

    );
}
