import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { specialRed } from 'utils/colors'
import { mobile, desktop } from 'utils/media'
import Container from 'components/Container'
import GraphBg from 'components/GraphBg'
import SectionTitle from 'components/SectionTitle'
import SectionSeparator from 'components/SectionSeparator'
import VideoHighlight from 'components/VideoHighlight'
import FactsRow from 'components/FactsRow'

const gridGutter = 34 / 2 // half of desired value

const videos = [
  {
    imageUrl: '/static/highlights-1.png',
    title: 'Five Years of Client GraphQL Infrastructure',
    description: 'Daniel Schafer, Facebook, GraphQL co-creator',
  },
  {
    imageUrl: '/static/graphql13-2.png',
    title: 'Launching GitHub\'s Public GraphQL API',
    description: 'Brooks Swinnerton, GitHub',
  },
  {
    imageUrl: '/static/graphql14.png',
    title: 'Closing Keynote',
    description: 'Lee Byron, Facebook, GraphQL co-creator',
  },
  {
    imageUrl: '/static/graphql12.png',
    title: 'Realtime GraphQL from the Trenches',
    description: 'Tasveer Singh, Mainframe',
  },
  {
    imageUrl: '/static/graphql5.png',
    title: 'Opening and closing',
    description: 'Chad Fowler, Microsoft/BlueYard',
  },
  {
    imageUrl: '/static/graphql23.png',
    title: 'Adding GraphQL to your existing architecture',
    description: 'Sashko Stubailo, Meteor/Apollo',
  },
]

const Highlights = () => (
  <Wrapper>
    <Container>
      <SectionSeparator />

      <TopGraphBgWrapper>
        <GraphBg />
      </TopGraphBgWrapper>

      <LowerGraphBgWrapper>
        <GraphBg />
      </LowerGraphBgWrapper>

      <Content>
        <SectionTitle spacing="large">
          Highlights from GraphQL-Europe 2017
        </SectionTitle>

        <Grid>
          {videos.map((v, i) => (
            <GridItem key={i}>
              <VideoHighlight {...v} />
            </GridItem>
          ))}
        </Grid>

        <FactsRow />

      </Content>
    </Container>
  </Wrapper>
)

export default Highlights

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`

const TopGraphBgWrapper = styled.div`
  position: absolute;
  top: ${rem(40)};
  left: ${rem(-140)};
  transform: rotateZ(-70deg);
`

const LowerGraphBgWrapper = styled.div`
  position: absolute;
  bottom: ${rem(40)};
  right: ${rem(-140)};
  transform: rotateZ(-70deg);
`

const Content = styled.div`
  position: relative;
  padding-top: ${rem(90)};
  padding-bottom: ${rem(90)};
`

const Grid = styled.div`
  margin-right: ${rem(-gridGutter)};
  margin-left: ${rem(-gridGutter)};

  display: flex;
  flex-wrap: wrap;
  justifty-content: flex-start;
`

const GridItem = styled.div`
  display: inline-block;
  padding: ${rem(gridGutter)};

  ${desktop(css`
    width: 33.333%;

    &:nth-last-child(-n+3) {
      padding-bottom: 0;
    }

    &:nth-child(-n+3) {
      padding-top: 0;
    }
  `)}

  ${mobile(css`
    width: 100%;
  `)}
`

const Fill = styled.div`
  width: 100%;
  height: 40px;
  background: #000;
`