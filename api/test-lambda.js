export async function handler(
  event,
  context
) {
  console.log(JSON.stringify(event),'e')
  return {
    statusCode: 200,
    body: `Welcome to deno ${Deno.version.deno} 🦕`,
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
  };
}
