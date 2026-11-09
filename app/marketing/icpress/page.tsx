import { CaseStudyPage } from '@/components/CaseStudyPage'
import { getCase } from '@/lib/caseStudies'

export default function Page() {
  return <CaseStudyPage item={getCase('icpress')} />
}
