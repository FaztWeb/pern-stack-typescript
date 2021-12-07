import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const history = useHistory();
  const params = useParams<{ id: string }>();

  const getTask = async (id: string) => {
    const response = await fetch("http://localhost:4000/tasks/" + id);
    const data = await response.json();
    setTask({ title: data.title, description: data.description });
  };

  useEffect(() => {
    if (params.id) {
      setEditing(true);
      getTask(params.id);
    }
  }, [params.id]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (editing) {
      await fetch("http://localhost:4000/tasks/" + params.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
    } else {
      await fetch("http://localhost:4000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
    }
    setLoading(true);
    history.push("/");
  };

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <Grid
      verticalAlign="middle"
      style={{ height: "100%" }}
      columns={3}
      centered
    >
      <Grid.Column>
        <Card fluid>
          <Card.Content>
            <h1>{editing ? "Edit Task" : "Save Task"}</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Input
                name="title"
                label="Title"
                type="text"
                placeholder="My Task"
                autoFocus
                onChange={handleChange}
                value={task.title}
              />
              <Form.TextArea
                name="description"
                label="Description"
                placeholder="This is my task..."
                rows={2}
                onChange={handleChange}
                value={task.description}
              />
              <Button
                primary
                disabled={!task.title || !task.description}
                loading={loading}
              >
                {editing ? "Update" : "Save"}
              </Button>
            </Form>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
};

export default TaskForm;
