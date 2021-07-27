import { Container, Menu, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  const history = useHistory();

  return (
    <Menu pointing secondary style={{ padding: "1rem" }}>
      <Container>
        <Menu.Item name="home" onClick={() => history.push("/")}>
          <img src={logo} alt="Tasks App" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="new-task" onClick={() => history.push("/new-task")}>
            <Button color="violet">New Task</Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;
