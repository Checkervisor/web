import type { NextPage } from 'next'
import TitleSection from 'components/title-section'
import Quality from 'components/quality'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-y-37 font-arial">
      <TitleSection />
      <Quality />
    </div>
  )
}

export default Home
