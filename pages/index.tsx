import Head from 'next/head'

import SectionContainer from 'components/SectionContainer'
import HelloSection from 'components/HelloSection'
import ProfileSection from 'components/ProfileSection'
import LinkSection from 'components/LinkSection'
import GameSection from 'components/GameSection'
import MiscSection from 'components/MiscSection'

const Home = () => (
  <>
    <div>
      <Head>
        <title>Hello - niceb5y web</title>
      </Head>
      <SectionContainer>
        <HelloSection />
        <ProfileSection />
        <LinkSection />
        <GameSection />
        <MiscSection />
      </SectionContainer>
    </div>
  </>
)

export default Home
