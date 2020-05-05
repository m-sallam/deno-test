import { Application } from "https://deno.land/x/espresso/mod.ts";
const app = new Application();

const { PORT=3000 } = Deno.env()

app.get("/", context => {
  context.send("Hello From Deno !");
});
app.start(PORT)
