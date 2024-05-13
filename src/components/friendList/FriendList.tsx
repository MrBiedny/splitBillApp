import Friend from "../friend/Friend";
import FriendTypes from "../types/FriendTypes";

interface FriendListProps {
  friends: FriendTypes[];
  onSelection: (friend: FriendTypes | null) => void;
  selectedFriend: FriendTypes | null;
}

function FriendsList({
  friends,
  onSelection,
  selectedFriend,
}: FriendListProps) {
  return (
    <ul>
      {friends.map((friend: FriendTypes) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
