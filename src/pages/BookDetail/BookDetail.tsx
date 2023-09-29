import { useParams } from 'react-router-dom'
import reactHtmlParser from 'react-html-parser'

import { useBookDetailsQuery } from '../../hooks/useBookDetails'
import { useThumbnail } from '../../hooks/useThumbnail'

import { MainLayout } from '../../layouts/MainLayout'

import { Button } from '../../components/Button'

import { ReactComponent as StarIcon } from '../../icons/star.svg'

import {
  BackgroundThumbnail,
  ButtonsContainer,
  Container,
  ContentContainer,
  Description,
  DescriptionContainer,
  DetailColumn,
  DetailsContainer,
  PublisherContainer,
  Thumbnail,
  ThumbnailContainer
} from './BookDetail.styles'
import { BookDetailLoader } from './BookDetailLoader'

export function BookDetail() {
  const params = useParams()

  const { data, isLoading } = useBookDetailsQuery({
    bookId: params.bookId as string
  })

  const thumbnailSrc = useThumbnail({ bookId: data?.id as string })

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      month: 'short',
      year: 'numeric'
    }).format(date)
  }

  return (
    <MainLayout>
      {data && !isLoading ? (
        <Container>
          <ContentContainer>
            <h1>{data.volumeInfo.title}</h1>

            <h2>{data.volumeInfo.authors?.[0]}</h2>

            <PublisherContainer>
              {data && (
                <span>
                  {formatDate(new Date(data.volumeInfo.publishedDate))}
                </span>
              )}{' '}
              · <span>{data.volumeInfo.publisher}</span>
            </PublisherContainer>

            <DetailsContainer>
              <DetailColumn>
                <strong>
                  {data.volumeInfo.averageRating
                    ? data.volumeInfo.averageRating
                    : 4}

                  <StarIcon />
                </strong>
                <span>Avaliações</span>
              </DetailColumn>

              <DetailColumn>
                <strong>{data.volumeInfo.pageCount}</strong>
                <span>Páginas</span>
              </DetailColumn>
            </DetailsContainer>

            <ButtonsContainer>
              <Button variant="outlined">Estou Lendo</Button>
              <Button variant="outlined">Quero Ler</Button>
              <Button variant="outlined">Já Li</Button>
            </ButtonsContainer>

            <DescriptionContainer>
              <h3>Sobre este livro</h3>

              <Description>
                {reactHtmlParser(data.volumeInfo.description)}
              </Description>
            </DescriptionContainer>
          </ContentContainer>

          <ThumbnailContainer>
            <Thumbnail src={thumbnailSrc} />
            <BackgroundThumbnail src={thumbnailSrc} />
          </ThumbnailContainer>
        </Container>
      ) : (
        <BookDetailLoader />
      )}
    </MainLayout>
  )
}