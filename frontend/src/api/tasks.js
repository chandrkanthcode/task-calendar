import client from "./client";

export const fetchTasks = async () => {
  const { data } = await client.get("/tasks");
  return data;
};

export const createTask = async (payload) => {
  const { data } = await client.post("/tasks", payload);
  return data;
};

export const updateTask = async (id, payload) => {
  const { data } = await client.put(`/tasks/${id}`, payload);
  return data;
};

export const deleteTask = async (id) => {
  const { data } = await client.delete(`/tasks/${id}`);
  return data;
};
