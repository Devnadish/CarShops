import Text from '../../../../components/shared/Text'
import { Badge } from '@/components/ui/badge'
import { providerType, providerTypeIcon } from '@/lib/provider'

export const ProviderType = ({ type }) => {
  const provider = providerType(type)
  const providerTypeIcons = providerTypeIcon(type)
  return <Bdg icon={providerTypeIcons} data={provider} />
}

const Bdg = ({ icon, data }) => {
  return (
    <Badge className='flex h-[30px] w-[70px] items-center justify-center gap-2 rounded-md border-white/20 bg-secondary p-0 font-tajwal '>
      {icon}
      <Text fontSize='xs' opacity='O70'>
        {data}
      </Text>
    </Badge>
  )
}
