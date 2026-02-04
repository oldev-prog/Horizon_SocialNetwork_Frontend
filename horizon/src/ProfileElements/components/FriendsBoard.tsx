
interface Friend {
  name: string;
  avatarUrl: string;
}

const friendsList: Friend[] = [
  { name: 'Hinata', avatarUrl: '/avatars/hinata2.jpg' },
  { name: 'Roxy', avatarUrl: '/avatars/roxy.jpg' },
  { name: 'Itachi', avatarUrl: '/avatars/itachi.jpg' },
  { name: 'Lelush', avatarUrl: '/avatars/Lelush.jpg' },
];

export function FriendBoard() {
  return (
    <div className="friends_board">
      <div className="friends_container">
        <a href="" className="h1_friends">
          Soulmates
        </a>
        <p className="friends_value">100</p>
      </div>
      <div className="friends_row first">
        {friendsList.map((friend, index) => (
          <div key={index} className="friend_container">
            <a href="">
              <img className="friends_img" src={friend.avatarUrl} alt={friend.name} />
            </a>
            <div className="friends_name">{friend.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}