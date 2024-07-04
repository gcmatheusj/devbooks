import { ChangeEvent, useRef, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useUpdateProfileMutation } from '../../hooks/useUpdateProfileMutation'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Input } from '../Input'

import { AvatarContainer, UpdateProfileContainer } from './PersonalData.styles'
import { useUploadAvatarMutation } from '../../hooks/useUploadAvatarMutation'

export function PersonalData() {
  const { user } = useAuth()
  const [name, setName] = useState('')
  const { mutateAsync: updateProfile, isLoading } = useUpdateProfileMutation()
  const { mutateAsync: uploadAvatar } = useUploadAvatarMutation()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData()
      formData.append('file', e.target.files[0])

      await uploadAvatar(formData)
    }
  }

  const handleFileUpload = () => {
    fileInputRef.current?.click()
  }

  const handleUpdateProfile = async () => {
    await updateProfile({ name })
  }

  return (
    <div>
      <AvatarContainer>
        <Avatar size={140} user={user} />
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <Button onClick={handleFileUpload}>Alterar Foto</Button>

        <Button variant="outlined">Remover Foto</Button>
      </AvatarContainer>

      <UpdateProfileContainer>
        <Input
          label="Nome Completo"
          defaultValue={user?.name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input label="Endereço de Email" defaultValue={user?.email} disabled />
        <Button disabled={!name || isLoading} onClick={handleUpdateProfile}>
          {isLoading ? 'Salvando...' : 'Salvar'}
        </Button>
      </UpdateProfileContainer>
    </div>
  )
}
