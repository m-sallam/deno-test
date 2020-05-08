export async function handler(
  event,
  context
){
  console.log(event.body?.body)
  const b = new Deno.Buffer()
  console.log(b.readSync(event.body?.body))
  return {
    body: `Welcome to deno ${Deno.version.deno} 🦕`,
    headers: { "content-type": "text/html;charset=utf8" },
    statusCode: 200
  };
}