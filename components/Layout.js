import { NavBar, Icon, WingBlank } from 'antd-mobile'
import { withRouter } from 'next/router'
import Head from 'next/head'

export default withRouter(({ router, children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </div>
))
