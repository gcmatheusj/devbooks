import { ReactComponent as NoImgIcon } from '../../icons/no-img.svg'

import { Container } from './Thumbnail.styles'

interface ThumbnailProps {
  title: string
  thumbnail?: string
  size?: 'small' | 'large'
  bgColor: string
}

const imgWidth = {
  small: '120px',
  large: '300px'
}

export function Thumbnail({
  title,
  thumbnail,
  size = 'small',
  bgColor
}: ThumbnailProps) {
  return (
    <Container size={size} bgColor={bgColor}>
      {thumbnail ? (
        <img src={thumbnail} alt={title} width={imgWidth[size]} />
      ) : (
        <NoImgIcon />
      )}
    </Container>
  )
}
