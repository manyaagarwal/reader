import React, { Component } from 'react'
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from '../Environment'
import BookList from './BookList'
import {ProgressBar, Paragraph} from 'react-native-paper'
import {appTheme} from "../constants";

const BookListPageQuery = graphql`
    query BookListPageQuery{ 
         books{
            ...BookList_books 
         }
    }
`

export function BookListPage (){
        return (
            <QueryRenderer
                environment={environment}
                query={BookListPageQuery}
                render={({error, props}) => {
                    if (error) {
                        return <Paragraph>{error.message}</Paragraph>
                    } else if (props) {
                        return <BookList books={props.books} />
                    }
                    return  <ProgressBar progress={0.5} color={appTheme.colors.accent} />
                }}
            />
        )

}
