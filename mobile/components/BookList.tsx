import * as React from 'react';
import {ScrollView} from 'react-native';
// @ts-ignore
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

import {Book} from "../../server/src/book";
import BookCard from './BookCard';

// @ts-ignore
function BookList({books}){
    // @ts-ignore
    return<ScrollView>
        {books.allBooks.edges.map(({node}) => (
            <BookCard key={node.id} book={node}/>
        ))}
    </ScrollView>;
}

export default createFragmentContainer(BookList, graphql`
  fragment BookList_books on Books {
    allBooks(first: 10, orderBy: lastReadAt) @connection(key: "BookList_allLinks", filters: []) {
    edges {
        node {
          ...BookCard_book
        }
      }
  }
`)