/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import { HeadProps } from 'gatsby';

import { SEO } from '../components/seo';
import { DataProps } from '../hooks/use-site-metadata';

import { Footer } from '../theme/components/Footer';
import Layout from '../theme/components/Layout';
import Header from '../theme/components/Header';
import Landing from '../theme/sections/Landing';
import About from '../theme/sections/About';
import Libraries from '../theme/sections/Libraries';
import { Blog } from '../theme/sections/Blog';
import { News } from '../theme/sections/News';
import { PAGE } from '../theme/utils/constants';
import { MailingListSubscription } from '../theme/components/mailingListSubscription/MailingListSubscription';

import { footerRoutes } from '../content/FooterRoutes';

const HomePage = (): JSX.Element => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Libraries />
    <News />
    <Blog />
    {/* TODO: When there will only one theme provider, move the Footer in the
    Layout class */}
    <Footer content={footerRoutes} />
    <MailingListSubscription />
  </Layout>
);

export default HomePage;

/*
 * You can only define the Head export inside a page, not in a component.
 * Valid tags inside the Head function are: link, meta, style, title, base, script, and noscript.
 * See https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }: HeadProps<DataProps>): JSX.Element => (
  <SEO title={PAGE.home} pathname={location.pathname} />
);
