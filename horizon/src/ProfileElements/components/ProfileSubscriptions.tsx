
interface User {
    id: number;
    name: string;
    avatar: string;
    username?: string;
}

// const friendsList: Friend[] = [
//     { name: 'Hinata', avatarUrl: '/avatars/hinata2.jpg' },
//     { name: 'Roxy', avatarUrl: '/avatars/roxy.jpg' },
//     { name: 'Itachi', avatarUrl: '/avatars/itachi.jpg' },
//     { name: 'Lelush', avatarUrl: '/avatars/Lelush.jpg' },
// ];

const followersData: User[] = [
    { id: 1, name: "Elon Musk", avatar: "/elon_musk.jpg", username: "@elonmusk" },
    { id: 2, name: "Itachi Uchiha", avatar: "/avatars/itachi.jpg", username: "@uch1ha" },
    { id: 3, name: "Guy from Mars", avatar: "/alien.png", username: "@marsguy" },
    // { id: 4, name: "Random User", avatar: "/myphoto.jpg", username: "@random" },
    // { id: 5, name: "John Smith", avatar: "/myphoto.jpg", username: "@johnsmith" },
];

const followingsData: User[] = [
    // { id: 1, name: "Elon Musk", avatar: "/myphoto.jpg", username: "@elonmusk" },
    // { id: 2, name: "Jane Doe", avatar: "/myphoto.jpg", username: "@janedoe" },
    { id: 3, name: "Guy from Mars", avatar: "/alien.png", username: "@marsguy" },
    { id: 4, name: "Hinata", avatar: "/avatars/hinata2.jpg", username: "@hina" },
    { id: 5, name: "Lelush King", avatar: "/avatars/Lelush.jpg", username: "@world_owner228" },
];

export function ProfileSubscriptions() {
    return (
        <div className="profile_subscriptions_wrapper">
            <div className="profile_subscriptions_header">
                <h3>Followers (125K)</h3>
                <button className="see_all_button">See all</button>
            </div>

            <div className="followers_list">
                {followersData.map((follower) => (
                    <div key={follower.id} className="follower_item">
                        <div style={{display: 'flex', alignItems: 'center', flex: 1}}>
                            <img className="follower_avatar" src={follower.avatar} />
                            <div className="follower_info">
                                <span className="follower_name">{follower.name}</span>
                                <span className="follower_username">{follower.username}</span>
                            </div>
                        </div>
                        <button className="follow_button">Follow</button>
                    </div>

                ))}
            </div>
            <div className="profile_subscriptions_header">
                <h3>Followings (125)</h3>
                <button className="see_all_button">See all</button>
            </div>

            <div className="followers_list">
                {followingsData.map((follower) => (
                    <div key={follower.id} className="follower_item">
                        <img className="follower_avatar" src={follower.avatar} />
                        <div className="follower_info">
                            <span className="follower_name">{follower.name}</span>
                            <span className="follower_username">{follower.username}</span>
                        </div>
                        <button className="follow_button">Following</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

// interface User {
//     id: number;
//     name: string;
//     nickname: string;
//     avatar: string;
// }
//
// export function ProfileSubscriptions() {
//     const followers: User[] = [
//         { id: 1, name: "Alice Smith", nickname: "@alice", avatar: "../public/avatars/alice.jpg" },
//         { id: 2, name: "Bob Johnson", nickname: "@bobby", avatar: "../public/avatars/bob.jpg" },
//         { id: 3, name: "Charlie King", nickname: "@charliek", avatar: "../public/avatars/charlie.jpg" },
//         { id: 4, name: "Diana Prince", nickname: "@diana", avatar: "../public/avatars/diana.jpg" },
//         { id: 5, name: "Eve Torres", nickname: "@evet", avatar: "../public/avatars/eve.jpg" }
//     ];
//
//     const following: User[] = [
//         { id: 6, name: "Frank Miller", nickname: "@frankm", avatar: "../public/avatars/frank.jpg" },
//         { id: 7, name: "Grace Lee", nickname: "@grace", avatar: "../public/avatars/grace.jpg" },
//         { id: 8, name: "Hank Moody", nickname: "@hankm", avatar: "../public/avatars/hank.jpg" },
//         { id: 9, name: "Ivy Wang", nickname: "@ivywang", avatar: "../public/avatars/ivy.jpg" },
//         { id: 10, name: "Jack Black", nickname: "@jackb", avatar: "../public/avatars/jack.jpg" }
//     ];
//
//     return (
//         <div className="profile_subscriptions_wrapper">
//             <div className="subs_header">
//                 <h3>Connections</h3>
//                 <p>{followers.length + following.length} total</p>
//             </div>
//
//             <div className="subs_section">
//                 <h4>Followers</h4>
//                 <div className="subs_list">
//                     {followers.slice(0, 4).map(user => (
//                         <div key={user.id} className="subs_user">
//                             <img src={user.avatar} alt={user.name} />
//                             <div className="subs_user_text">
//                                 <span className="subs_user_name">{user.name}</span>
//                                 <span className="subs_user_nickname">{user.nickname}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//             <div className="subs_section">
//                 <h4>Following</h4>
//                 <div className="subs_list">
//                     {following.slice(0, 4).map(user => (
//                         <div key={user.id} className="subs_user">
//                             <img src={user.avatar} alt={user.name} />
//                             <div className="subs_user_text">
//                                 <span className="subs_user_name">{user.name}</span>
//                                 <span className="subs_user_nickname">{user.nickname}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//             <div className="subs_footer">
//                 <a href="#">View all</a>
//             </div>
//         </div>
//     );
// }
