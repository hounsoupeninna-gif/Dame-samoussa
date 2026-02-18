export async function onRequest(context: any) {
  const response = await context.next();
  const url = new URL(context.request.url);

  // Force correct MIME types for JS and CSS files
  if (url.pathname.endsWith('.js')) {
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Content-Type', 'application/javascript; charset=utf-8');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }

  if (url.pathname.endsWith('.css')) {
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Content-Type', 'text/css; charset=utf-8');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }

  return response;
}
