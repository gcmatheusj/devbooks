import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { googleBooksApi } from '../../services/googleBooksApi'

import { Container, Content, LoadingContainer } from './Book.style'

import { Spinner } from '../../components/Spinner'
import { Thumbnail } from '../../components/Thumbnail'

export interface BookState {
  id: string
  volumeInfo: {
    title: string
    subtitle: string
    description: string
    imageLinks?: {
      smallThumbnail: string
      thumbnail: string
    }
  }
}

export function Book() {
  const [book, setBook] = useState<BookState | null>(null)

  const params = useParams()
  const { bookId } = params

  useEffect(() => {
    googleBooksApi
      .get(`/v1/volumes/${bookId}`)
      .then((response) => setBook(response.data))
  }, [bookId])

  return (
    <Container>
      {book ? (
        <>
          <Thumbnail
            thumbnail={book.volumeInfo.imageLinks?.thumbnail}
            title={book.volumeInfo.title}
            size="large"
            bgColor="#ef552b"
          />

          <Content>
            <h2>{book.volumeInfo.title}</h2>
            <h3>{book.volumeInfo.subtitle}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: book.volumeInfo.description
              }}
            />
          </Content>
        </>
      ) : (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
    </Container>
  )
}
