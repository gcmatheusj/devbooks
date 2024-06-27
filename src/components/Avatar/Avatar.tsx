import { Container } from './Avatar.styles'

import { ReactComponent as UserIcon } from '../../icons/user.svg'

export interface AvatarProps {
  size?: number
  user?: {
    name: string
    avatar?: string
  }
}

export function Avatar({ size = 40, user }: AvatarProps) {
  return (
    <Container size={size} avatar={user?.avatar}>
      {!user?.avatar ? <UserIcon /> : null}
    </Container>
  )
}
