import { Button } from '../../components/Button'
import { useMyBooksQuery } from '../../hooks/useMyBooksQuery'
import { MainLayout } from '../../layouts/MainLayout'
import { generateThumbnailSrc } from '../../utils/generateThumbnailSrc'
import {
  Book,
  BookContainer,
  Container,
  Details,
  PageCountText,
  ProgressBar,
  ProgressBarContainer,
  ReadingCard,
  ReadingList,
  Thumbnail
} from './MyBooks.styles'
import { MyBooksLoader } from './MyBooksLoader'

export function MyBooks() {
  const { data, isLoading } = useMyBooksQuery()

  return (
    <MainLayout>
      {data && !isLoading ? (
        <Container>
          <div>
            <h1>Lendo</h1>

            <ReadingList>
              {data.isReading.map((item) => (
                <li key={item.bookId}>
                  <ReadingCard>
                    <Thumbnail
                      src={generateThumbnailSrc({ bookId: item.bookId })}
                      alt={item.book.volumeInfo.title}
                    />

                    <Details>
                      <h2>{item.book.volumeInfo.title}</h2>

                      {item.book.volumeInfo.authors && (
                        <h3>{item.book.volumeInfo.authors[0]}</h3>
                      )}

                      <ProgressBarContainer>
                        <ProgressBar progress={30} />
                        <span>30%</span>
                      </ProgressBarContainer>

                      <PageCountText>
                        Faltam 200 pág. para terminar.
                      </PageCountText>

                      <Button
                        variant="outlined"
                        color="secondary"
                        size="small"
                        fullWidth
                      >
                        Atualizar Leitura
                      </Button>
                    </Details>
                  </ReadingCard>
                </li>
              ))}
            </ReadingList>
          </div>

          <div>
            <h1>Quero Ler</h1>

            <BookContainer>
              {data.wantsToRead.map((item) => (
                <Book key={item.bookId}>
                  <Thumbnail
                    src={generateThumbnailSrc({ bookId: item.bookId })}
                    alt={item.book.volumeInfo.title}
                  />

                  <h2>{item.book.volumeInfo.title}</h2>
                  {item.book.volumeInfo.authors && (
                    <h3>{item.book.volumeInfo.authors[0]}</h3>
                  )}
                </Book>
              ))}
            </BookContainer>
          </div>

          <div>
            <h1>Lido</h1>

            <BookContainer>
              {data.read.map((item) => (
                <Book key={item.bookId}>
                  <Thumbnail
                    src={generateThumbnailSrc({ bookId: item.bookId })}
                    alt={item.book.volumeInfo.title}
                  />

                  <h2>{item.book.volumeInfo.title}</h2>
                  {item.book.volumeInfo.authors && (
                    <h3>{item.book.volumeInfo.authors[0]}</h3>
                  )}
                </Book>
              ))}
            </BookContainer>
          </div>
        </Container>
      ) : (
        <MyBooksLoader />
      )}
    </MainLayout>
  )
}
