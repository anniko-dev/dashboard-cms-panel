import { GitHubBanner, Refine, WelcomePage } from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';

import { useNotificationProvider } from '@refinedev/antd';
import '@refinedev/antd/dist/reset.css';

import routerBindings, { DocumentTitleHandler, UnsavedChangesNotifier } from '@refinedev/react-router-v6';
import { App as AntdApp } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
              // dataProvider={dataProvider(gqlClient)}
              // liveProvider={liveProvider(wsClient)}
              notificationProvider={useNotificationProvider}
              routerProvider={routerBindings}
              // authProvider={}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: 'QbMYKr-zRrQEM-sqP1FV',
                liveMode: 'auto',
              }}
            >
              <Routes>
                <Route index element={<WelcomePage />} />
              </Routes>
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
