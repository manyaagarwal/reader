import * as React from 'react';
import {ScrollView} from 'react-native';
import {BookCard} from './BookCard';
import {Book} from "../../server/src/book";

export function BookList(){
    const books : Array<Book> = [];
    return(
        <ScrollView>
            {books.map(book => (
                <BookCard key = {book.id} book = {book} />
            ))}
        </ScrollView>
    );
}