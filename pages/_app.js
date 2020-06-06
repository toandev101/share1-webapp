import App from 'next/app'
import Head from 'next/head'

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
          />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />
          <style global jsx>{`
            html,
            body {
              font-family: 'Helvetica Neue', 'Hiragino Sans GB', Helvetica,
                'Microsoft YaHei', Arial;
              margin: 0;
            }
          `}</style>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
