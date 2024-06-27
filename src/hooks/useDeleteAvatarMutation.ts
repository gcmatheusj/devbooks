import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../services/api'

async function deleteAvatar() {
  await api.delete('/user/avatar')
}

export function useDeleteAvatarMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteAvatar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
    }
  })
}
