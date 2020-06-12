import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';

export default class Xyzzy extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              {_.get(this.props, 'pageContext.frontmatter.message') && 
                <div>
            	  {_.get(this.props, 'pageContext.frontmatter.message')}
                </div>
              }
            </Layout>
        );
    }
}
