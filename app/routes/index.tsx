import type {
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useFlags } from 'flagsmith/react';

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const meta: MetaFunction = () => ({
  title: "Remix: So great, it's funny!",
  description:
    "Remix jokes app. Learn Remix and laugh at the same time!",
});

export default function IndexRoute() {
  const flags = useFlags(['link_text']);
  const linkText = flags.link_text;

  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              {linkText.enabled && <Link to="jokes">{linkText.value}</Link>}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}