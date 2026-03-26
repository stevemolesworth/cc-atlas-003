import { PageHeader, OverflowBreadcrumbs } from '@diligentcorp/atlas-react-bundle';
import { NavLink } from 'react-router';

import PageLayout from '../components/PageLayout.js';

export default function ReferenceAssetsPage() {
  return (
    <PageLayout>
      <PageHeader
        pageTitle="Reference Assets"
        breadcrumbs={
          <OverflowBreadcrumbs
            leadingElement={<span>Connected Compliance</span>}
            items={[
              {
                id: 'reference-assets',
                label: 'Reference Assets',
                url: '/',
              },
            ]}
            hideLastItem={true}
            aria-label="Breadcrumbs"
          >
            {({ label, url }) => <NavLink to={url}>{label}</NavLink>}
          </OverflowBreadcrumbs>
        }
      />
    </PageLayout>
  );
}
