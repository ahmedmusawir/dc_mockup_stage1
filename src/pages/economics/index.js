import React from 'react';
import { Layout } from 'components/layout';
import { HeroBlockCommon } from 'components/general';

class Economics extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - Economics Page"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        <HeroBlockCommon
          backgroundImg="/images/economics-header.jpg"
          title="1000 Accountants at Your Fingertips"
          description="Some long subtitle text goes here. It would be a tagline that describes the value of the software"
        />
      </Layout>
    );
  }
}

export default Economics;
