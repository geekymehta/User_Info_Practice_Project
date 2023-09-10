import Card from "../ui/Card";
import "../../index.css";
import Button from "./Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  const clickHandler = () => {
    console.log("click handled");
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <Button
          className="button"
          buttonName="Add"
          type="submit"
          onClick={clickHandler}
        >
          Add
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
