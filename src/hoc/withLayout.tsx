// tslint:disable variable-name import-name
import * as React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

import '../styles/style.scss';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

interface Options {
}

export default (options: Options = {}) => (ComposedComponent) => {
  class WithLayout extends React.Component {
    static async getInitialProps(ctx, apolloClient) {
      if (ComposedComponent.getInitialProps) {
        await ComposedComponent.getInitialProps(ctx, apolloClient);
      }

      return {};
    }

    render() {
      return (
        <div>
					<header>
						Logo
					</header>
					<aside>
						aside
					</aside>
					<section className="content">
						<ComposedComponent {...this.props}/>
					</section>
				</div>
      );
    }
  }

  return WithLayout;
};
