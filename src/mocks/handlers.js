import { rest } from "msw";

export const handlers = [
  rest.get("https://randomuser.me/api/?results=5", (req, res, ctx) => {
    const results = req.url.searchParams.get("results");
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            name: { first: "John", last: "Doe" },
            login: { username: "johndoe" },
            picture: { large: "https://via.placeholder.com/150" },
          },
          {
            name: { first: "Jane", last: "Smith" },
            login: { username: "janesmith" },
            picture: { large: "https://via.placeholder.com/150" },
          },
        ],
      })
    );
  }),
];
