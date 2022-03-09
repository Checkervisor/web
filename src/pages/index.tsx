import type { NextPage } from 'next'
import TitleSection from 'components/title-section'
import Quality from 'components/quality'
import Legitcheck from 'components/legit-check'
import AuthResult from 'components/auth-result'
import BottomBanner from 'components/bottom-banner'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-y-37 font-arial">
      <TitleSection />
      <Quality />
      <Legitcheck />
      <AuthResult />
      <BottomBanner />
    </div>
  )
}

export default Home
