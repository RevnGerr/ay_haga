const http = require("http");

let posts = [
  {
    id: 1,
    title: "Post 1",
    content: "This is the first post.",
  },
  {
    id: 2,
    title: "Post 2",
    content: "This is the second post.",
  },
  {
    id: 3,
    title: "Post 3",
    content: "This is the third post.",
  },
];

const users = [{ id: 1, name: "John Doe", email: "@gmail.com" }];

function s(req, res) {
  const [_, path, id] = req.url.split("/");

  if (path === "posts") {
    if (req.method === "POST") {
      posts.push({
        id: posts.length + 1,
        title: `Post ${posts.length + 1}`,
        content: "This is the post.",
      });
      res.end(JSON.stringify(posts));
      return;
    } else if (req.method === "GET") {
      res.end(JSON.stringify(posts));
      return;
    } else if (req.method === "DELETE") {
      posts = posts.filter((p) => p.id !== parseInt(id));
      res.end(JSON.stringify(posts));
      return;
    }
  } else if (path === "users") {
    res.end(JSON.stringify(users));
    return;
  }

  res.end("NOT FOUND");
}

const server = http.createServer(s);

server.listen(3000);
