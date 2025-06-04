import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        Go to the{" "}
        <Link to="/philosophy" state={{ data: "Philosophy Data", location: "Philosophy Page" }}>
          Philosophy
        </Link>.
      </p>
      <p>
        Go to the{" "}
        <Link to="/literature" state={{ data: "Literature Data", location: "Literature Page" }}>
          Literature
        </Link>.
      </p>
      <p>
        Go to the{" "}
        <Link to="/painting" state={{ data: "Literature Data", location: "Literature Page" }}>
          Painting
        </Link>.
      </p>
      <p>
        Go to the{" "}
        <Link to="/cinema" state={{ data: "Literature Data", location: "Literature Page" }}>
          Cinema
        </Link>.
      </p>
      <p>
        Go to the{" "}
        <Link to="/urban" state={{ data: "Literature Data", location: "Literature Page" }}>
          Urban Geography
        </Link>.
      </p>
      <p>
        Go to the{" "}
        <Link to="/social" state={{ data: "Literature Data", location: "Literature Page" }}>
          Social Sciences
        </Link>.
      </p>
      <p>
        Go to the{" "}
        <Link to="/music" state={{ data: "Literature Data", location: "Literature Page" }}>
          Music
        </Link>.
      </p>
      <p>
        Go to the{" "}
        <Link to="/messi" state={{ data: "Literature Data", location: "Literature Page" }}>
          Messi
        </Link>.
      </p>
    </main>
  )
}

