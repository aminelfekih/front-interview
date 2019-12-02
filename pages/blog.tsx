import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Posts from '../components/posts';

const Blog: React.FunctionComponent = () => (
  <Layout>
    <h1 data-testid="page-title">Blog</h1>
    <div>
    <Posts />
    </div>
  </Layout>
);

export default Blog;
