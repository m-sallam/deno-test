const key = "your-secret";
import makeJwt from "https://deno.land/x/djwt/create.ts";
export async function handler(
  event,
  context
){
  const body = JSON.parse(event.body);
  if (body.method.toLowerCase() !== 'post') {
    return {
      body: JSON.stringify({ token: null, errors: ['function only supports post request'] }),
      headers: { "content-type": "application/json" },
      statusCode: 422,
    };
  } else {
    const postBoody = JSON.parse(atob(body?.body));
    if (!postBoody?.payload) {
      return {
        body: JSON.stringify(
          { token: null, errors: ["payload missing"] },
        ),
        headers: { "content-type": "application/json" },
        statusCode: 422,
      };
    } else {
      const token = makeJwt(postBoody.payload)
      return {
        body: JSON.stringify(
          { token, errors: null },
        ),
        headers: { "content-type": "application/json" },
        statusCode: 200,
      };
    }
  } 
}