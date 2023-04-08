import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { googleBooksApi } from '../../services/googleBooksApi'

import { Cape, Container, Content, LoadingContainer } from './Book.style'

import { Spinner } from '../../components/Spinner'

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
          <Cape>
            {book.volumeInfo.imageLinks ? (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                width={300}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}
          </Cape>

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
