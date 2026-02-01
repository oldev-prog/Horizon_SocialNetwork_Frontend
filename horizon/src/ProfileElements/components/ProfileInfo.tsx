import { FriendBoard} from './FriendsBoard.tsx';

interface ActionButtonProps {
  icon: string;
  label: string;
  className?: string;
  isTooltip?: boolean;
}

const topActions = [
  { icon: 'pencil', label: 'Edit profile', className: 'pencil', isTooltip: true, },
  { icon: 'more', label: 'More', className: 'more', isTooltip: true },
  { icon: 'share', label: 'Share profile', className: 'more', isTooltip: true },
];

const bottomActions = [
  { icon: 'plus', label: 'Create new post', className: 'plus' },
  { icon: 'new_message', label: 'Send new message', className: 'message' },
];

const ActionButton = ({
  icon,
  label,
  className = '',
  isTooltip = false,
}: ActionButtonProps) => (
  <button className={`normal_button ${className}`}>
    <img
      className={`icon_${icon}`}
      src={`/icons/icon_${icon}.png`}
      alt={icon}
    />
    <span className={isTooltip ? 'tooltip' : 'normal_button_text'}>
      {label}
    </span>
  </button>
);


export function ProfileInfo() {
  return (
    <div className="profile_info">
      <FriendBoard />
      <div className="right_sidebar">
        {topActions.map((btn) => (
          <ActionButton key={btn.icon} {...btn} />
        ))}
      </div>
      <h2 className="profile_name">Oleg Zolotarev</h2>
      <div className="profile_age">
        <p className="age">Age:</p>
        <p className="age_value">22</p>
      </div>
      <div className="profile_mood">
        <p className="mood">Mood:</p>
        <p className="mood_value">happy</p>
      </div>
      <div className="location_info">
        <img
          className="icon_location"
          src="../../../public/icons/icon_location.png"
        />
        <a className="location" href="">
          Somewhere in the universe
        </a>
      </div>
      <div className="profile_buttons">
        {bottomActions.map((btn) => (
          <ActionButton key={btn.icon} {...btn} />
        ))}
      </div>
    </div>
  );
}