async function getTodo() {
  const getTodo = document.getElementById("getTodo");
  const input = document.getElementById("todoInput");

  getTodo.addEventListener("click", async () => {
    const todoId = input.value;

    const todo = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    ).then((response) => {
      if (!response.ok) return null;
      return response.json();
    });

    if (todo == null) return;

    const todosDev = document.getElementById("todos");

    todosDev.innerHTML += `
    <h2>todoId: ${todo.id} userId: ${todo.userId}</h2>
    <h2>title: ${todo.title}</h2>
    <p>Completed: ${todo.completed}</p>
    <button onclick="getUser(${todo.userId})">getUser</button>
    <div id="user-${todo.userId}"></div>
    <p>----------------------</p>
  `;
  });
}

async function getUser(id) {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((response) => {
    if (!response.ok) return null;
    return response.json();
  });

  if (user == null) return;


  const userDev = document.getElementById("user-" + id);
  userDev.innerHTML += `
    <h2>userId: ${user.id}</h2>
    <h2>name: ${user.name}</h2>
    <p>username: ${user.username}</p>
    <p>email: ${user.email}</p>
    <p>phone: ${user.phone}</p>
    <p>website: ${user.website}</p>
    <p>company: ${user.company.name}</p>
    <button onclick="getPosts(${user.id})">get Posts</button>
    <div id="posts-${user.id}"></div>
  `;

  return user;
}

async function getPosts(userId) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  ).then((response) => {
    if (!response.ok) return null;
    return response.json();
  });

  if (posts == null) return;

  const postsDev = document.getElementById("posts-" + userId);
  postsDev.innerHTML = "";
  posts.forEach((post) => {
    postsDev.innerHTML += `
    <h2>postId: ${post.id}</h2>
    <h2>title: ${post.title}</h2>
    <p>body: ${post.body}</p>
  `;
  });
  return posts;
}

getTodo();
