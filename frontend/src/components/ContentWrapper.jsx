import React from 'react'
import { ContentRowTop } from './ContentRowTop';
import { Footer } from './Footer';
import { TopBar } from './TopBar';
import {Table} from './Table'

export const ContentWrapper = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />
        <ContentRowTop />
      </div>
      <div>
        <Table />
      </div>
      <Footer />
    </div>
  );
}

