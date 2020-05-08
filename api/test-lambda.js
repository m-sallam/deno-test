export async function handler(
  event,
  context
){
  console.log(typeof event.body)
  if (JSON.parse(event.body)?.body) {
    console.log(JSON.parse(atob(event.body?.body)));
  }
  return {
    body: `Welcome to deno ${Deno.version.deno} 🦕`,
    headers: { "content-type": "text/html;charset=utf8" },
    statusCode: 200
  };
}