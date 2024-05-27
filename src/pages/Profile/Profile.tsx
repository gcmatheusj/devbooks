import { useState } from 'react'

import { MainLayout } from '../../layouts/MainLayout'
import { PersonalData } from '../../components/PersonalData'

import { Container, ProfileMenu, ProfileMenuItem } from './Profile.styles'

type ProfileTabState = 'personal-data' | 'security'

export function Profile() {
  const [profileTab, setProfileTab] = useState<ProfileTabState>('personal-data')

  const handleChangeProfileTab = (tab: ProfileTabState) => {
    setProfileTab(tab)
  }

  return (
    <MainLayout>
      <h1>Meu Perfil</h1>

      <Container>
        <ProfileMenu>
          <ul>
            <ProfileMenuItem
              isActive={profileTab === 'personal-data'}
              onClick={() => handleChangeProfileTab('personal-data')}
            >
              Dados Pessoais
            </ProfileMenuItem>
            <ProfileMenuItem
              isActive={profileTab === 'security'}
              onClick={() => handleChangeProfileTab('security')}
            >
              Segurança
            </ProfileMenuItem>
          </ul>
        </ProfileMenu>

        {profileTab === 'personal-data' && <PersonalData />}
      </Container>
    </MainLayout>
  )
}
