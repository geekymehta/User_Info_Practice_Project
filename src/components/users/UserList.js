import Card from "../ui/Card";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.data.map((user) => (
          <li>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
