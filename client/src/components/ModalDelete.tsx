import { useState } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { Task } from "./Task";

interface Props {
  task: Task;
  deleteTask: (id: number) => Promise<void>;
}

const ModalDelete = ({ task, deleteTask }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={<Button icon="trash" color="red" size="mini" />}
    >
      <Header icon>
        <Icon name="trash" />
        Deleting task "{task.title}"
      </Header>
      <Modal.Content>
        <p style={{ textAlign: "center" }}>
          Are you sure you want to delete this task
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button
          color="green"
          inverted
          onClick={async () => {
            await deleteTask(task.id);
            setOpen(false);
          }}
        >
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalDelete;
