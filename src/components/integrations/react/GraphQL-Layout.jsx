import { Placeholder, useSitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import { SitecoreContextMap } from '@lib/context';
import componentFactory from './componentFactory';

const GraphQLLayout = ({ rendering }) => {
  const sitecoreContext = SitecoreContextMap.get('context');

  const disconnectedMode =
    sitecoreContext.route && sitecoreContext.route.layoutId === 'available-in-connected-mode';

  return (
    <div data-e2e-id="graphql-layout">
      {disconnectedMode && (
        <>
          <p>
            This app is running in disconnected mode. GraphQL requires connected mode, headless
            connected mode, or integrated mode to work.
          </p>
          <p>
            Libraries such as <code>graphql-tools</code> can provide GraphQL API mocking
            capabilities, which could enable disconnected GraphQL. This is not supported out of the
            box, however.
          </p>
          <p>
            To view the GraphQL samples, restart the app using <code>jss start:connected</code>
            &nbsp; or deploy the app to Sitecore to run in integrated mode per the JSS
            documentation.
          </p>
        </>
      )}
      <Placeholder name="AstroApp-jss-graphql-layout" rendering={rendering} componentFactory={componentFactory} />
    </div>
  );
};

export default GraphQLLayout;
