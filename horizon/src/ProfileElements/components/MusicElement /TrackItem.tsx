import './MusicContentStyles.css'

type Track = {
    id: number
    title: string
    artist: string
    duration: string
}

type Props = {
    track: Track
}

export function TrackItem({ track }: Props) {
    return (
        <div className="music_item track_item">
            <div className="track_left">
                <span className="track_title">{track.title}</span>
                <span className="track_artist">{track.artist}</span>
            </div>

            <div className="track_right">
                <span className="track_duration">{track.duration}</span>

                <button className="music_more track_more">
                    <img
                        className="more_icon"
                        src="/icons/icon_more.png"
                        alt="more"
                    />
                </button>
            </div>
        </div>


        // <div className="tracks_list">
        //     {tracksData.map((track) => (
        //         <div
        //             key={track.id}
        //             className={`track_item ${
        //                 currentTrack?.id === track.id ? "active" : ""
        //             }`}
        //             onClick={() => handlePlay(track)}
        //         >
        //             <div className="track_play">
        //                 <img
        //                     className={`music_icon ${currentTrack?.id === track.id && isPlaying ? "playing" : ""}`}
        //                     src={
        //                         currentTrack?.id === track.id && isPlaying
        //                             ? "/icons/icon-pause.png"
        //                             : "/icons/icon_play.png"
        //                     }
        //                 />
        //             </div>
        //             <div className="track_info">
        //                 <span className="track_title">{track.title}</span>
        //                 <span className="track_artist">{track.artist}</span>
        //             </div>
        //             <div className="track_duration">{track.duration}</div>
        //         </div>
        //     ))}
        // </div>
    )
}
