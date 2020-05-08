export async function handler(
  event,
  context
) {
  console.log(event,'e')
  console.log(context, 'c')
  return {
    statusCode: 200,
    body: `Welcome to deno ${Deno.version.deno} 🦕`,
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
  };
}
