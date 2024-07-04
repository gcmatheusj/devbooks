import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../services/api'

async function uploadAvatar(form: FormData) {
  const { data } = await api.post('/user/avatar', form)

  return data
}

export function useUploadAvatarMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: uploadAvatar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
    }
  })
}
