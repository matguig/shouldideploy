import React from "react";
import Head from "next/head";
import { IS_FRIDAY } from "../helpers/constans";
import Widget from "../component/widget";

class Page extends React.Component {
  static async getInitialProps() {
    return { color: IS_FRIDAY };
  }

  render() {
    return (
      <>
        <Head>
          <link
            rel="icon"
            type="image/png"
            href={
              this.props.color ? "https://shouldideploy.today/dots-red.png" : "https://shouldideploy.today/dots.png"
            }
            sizes="32x32"
          />
          <meta
            property="og:image"
            content={this.props.color ? "https://shouldideploy.today/no.png" : "https://shouldideploy.today/yes.png"}
          />
          <title>Should I Deploy Today?</title>
        </Head>
        <div className={`wrapper ${this.props.color && "its-friday"}`}>
          <Widget />
        </div>
      </>
    );
  }
}

export default Page;
