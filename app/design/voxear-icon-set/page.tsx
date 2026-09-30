import { VoxearCasePage } from '@/components/VoxearCasePage'
import { VOXEAR_CASES } from '@/lib/voxearCases'

export default function Page() {
  return <VoxearCasePage item={VOXEAR_CASES.find((c) => c.slug === 'icon-set')!} />
}
