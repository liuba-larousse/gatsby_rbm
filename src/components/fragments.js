/** @format */

import { graphql } from 'gatsby';

export const PageFields = graphql`
  fragment PageFields on GoogleSpreadsheetContent {
    aboutText
    aboutTitle
    artistText
    artistTitle
    musicText
    musicTitle
    videoText
    videoTitle
    workWithUsText
    workWithUsTitle
  }
`;
