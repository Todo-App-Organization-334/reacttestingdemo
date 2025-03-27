import { rest } from "msw";

export const handlers = [
  rest.get("https://api.example.com/followers", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
      ])
    );
  }),
];
