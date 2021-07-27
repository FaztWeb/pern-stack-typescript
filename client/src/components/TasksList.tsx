import { useEffect, useState } from "react";
import { Button, Card, Header } from "semantic-ui-react";
import { Task } from "./Task";
import ModalDelete from "./ModalDelete";
import {useHistory} from 'react-router-dom'

const TasksList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const history = useHistory();

  const getTasks = async () => {
    const response = await fetch("http://localhost:4000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const deleteTask = async (id: number) => {
    await fetch("http://localhost:4000/tasks/" + id, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Card.Group itemsPerRow={3}>
      {tasks.map((task) => (
        <Card key={task.id}>
          <Card.Content>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Header>{task.title}</Header>
              <div>
                <Button
                  icon="edit"
                  size="mini"
                  secondary
                  onClick={() => history.push("/edit-task/" + task.id)}
                />
                <ModalDelete task={task} deleteTask={deleteTask} />
              </div>
            </div>
            <p>{task.description}</p>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default TasksList;
