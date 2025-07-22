export function GET(request) {
  console.log(request);

  return new Response("Hello from the API route!");
}

//export function POST(request) {}
