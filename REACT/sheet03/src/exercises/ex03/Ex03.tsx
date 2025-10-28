import UserList from "./UserList";

type level = "basic" | "advanced";

function Ex03({ nivel }: { nivel: level }) {
  return (
    <UserList/>
  );
}

export default Ex03;