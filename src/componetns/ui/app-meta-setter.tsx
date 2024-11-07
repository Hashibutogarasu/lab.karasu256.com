import Head from "next/head";
import App from "./app-component";
import config from "@/config/site-config.json";

export default function AppMetaSetter({ children, props }: { props: string; children: React.ReactNode; }) {
  return (
    <html lang="ja">
      <Head>
        <title>{`${config.title}`}</title>
        <meta name="description" content={`${config.description}`} />
      </Head>
      <body className={props}>
        <App>
          {children}
        </App>
      </body>
    </html>
  );
}