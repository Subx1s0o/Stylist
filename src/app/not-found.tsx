"use client";
import Error from "next/error";

export default function notFound() {
  return (
    <html lang="uk">
      <body>
        <Error statusCode={404}>404</Error>
      </body>
    </html>
  );
}
