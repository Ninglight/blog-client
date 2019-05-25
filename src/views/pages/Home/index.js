// define
import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
// connect
import { connect } from 'react-fela'
import { pxTo } from 'design-system-utils'
import ds from 'views/styles/designSystem'
// childs
import Container from 'views/components/presentationals/Container'
import Heading from 'views/components/presentationals/Heading'
import Illustration from 'views/components/presentationals/Illustration'
import CardIconTop from 'views/components/presentationals/CardIconTop'

class Home extends PureComponent {
  
  render() {
    const { styles } = this.props

    return (
      <Fragment>


          <Container>
            <Grid>
              <Row className={styles.headerWrapper}>
                <Col xs={6} md={6}>
                  <Heading number="1" className={styles.heading}>
                    Learn to make wonderfull
                  </Heading>
                  <p className={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </Col>
                <Col xs={6}>
                    <Illustration name="home" className={styles.illustration}/>
                </Col>
              </Row>
            </Grid>
          </Container>


          <div className={styles.cardsIconTopWrapper}>
            <Container>
              <Grid>
                <Row>
                  <Col xs={12} sm={6} md={4}>
                    <CardIconTop icon="circle" iconWidth="500" iconHeight="500"/>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                    <CardIconTop icon="circle" iconWidth="100" iconHeight="100"/>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                    <CardIconTop icon="circle" iconWidth="100" iconHeight="100"/>
                  </Col>
                </Row>
                </Grid>
            </Container>
          </div>


          <Container>
            <Grid>
              <Row middle="md" className={styles.illustrationSideWrapper}>
                <Col xs={12} md={6}>
                  <Heading number="2" >
                    Lorem ipsum dolor sit amet consectetur
                  </Heading>
                  <p>
                  Donec at tortor vel felis elementum sagittis in eu lorem. Etiam semper aliquam risus vitae molestie. Suspendisse nec arcu scelerisque, ultricies augue id, scelerisque tellus. Aenean at rutrum tellus, id volutpat lorem. In tincidunt posuere ligula pharetra molestie. Nulla luctus id risus ut suscipit. Curabitur a eros id odio feugiat aliquet. Aenean tempor ut leo et accumsan. Ut sagittis ut nunc sit amet accumsan. Maecenas id ipsum in elit consequat interdum. Curabitur ac lorem sit amet tortor accumsan mollis quis eget justo. Vestibulum a ipsum ipsum. Donec porta mollis ante, eget bibendum mi luctus ut. Nulla facilisi.
                  </p>
                </Col>
                <Col xs={12} md={6}>
                    <Illustration name="react" className={styles.illustration}/>
                </Col>
              </Row>
            </Grid>
          </Container>



          <Container>
            <Grid>
              <Row middle="md" className={styles.illustrationSideWrapper}>
                <Col xs={12} md={6}>
                    <Illustration name="monitoring" className={styles.illustration}/>
                </Col>
                <Col xs={12} md={6}>
                  <Heading number="2" >
                    Lorem ipsum dolor sit amet consectetur
                  </Heading>
                  <p>
                  Praesent eget vulputate orci, feugiat faucibus nisl. Donec iaculis lectus a urna tempor, et egestas massa euismod. Praesent elementum tellus at lacus porta, tempus fermentum est fringilla. In lectus velit, maximus dignissim massa placerat, ultricies pellentesque orci. Fusce a urna augue. Nam ultricies metus odio, et porttitor ligula pretium non. Vestibulum in sapien augue. Nulla luctus ut dolor sit amet tempus. Duis pellentesque, urna vitae rhoncus blandit, lectus ligula faucibus turpis, ac egestas magna est tempor enim. Sed ante eros, hendrerit vel efficitur in, sodales gravida nunc. Donec congue luctus nisi, quis laoreet sapien consectetur vitae. Sed quis dignissim massa. Nullam non libero at lacus hendrerit placerat.
                  </p>
                </Col>
              </Row>
            </Grid>
          </Container>

      </Fragment>
    )
  }
}

Home.propTypes = {
  styles: PropTypes.object.isRequired,
}

const baseFontSize = ds.get('type.baseFontSize')
const rules = {
  headerWrapper: () => ({
    height: 'calc(100vh - 70px)',
    display: 'flex',
    alignItems: 'center',
    zIndex: '2'
  }),
  headingWrapper: () => ({
    
  }),
  contentWrapper: () => ({
    margin: '0 auto',
    '@media (min-width: 768px)': {
      position:'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    },
  }),
  illustration: () => ({
    '> svg': {
      height: '100%',
      width: '100%',
      zIndex:' -1',
    },
  }),
  bullet:() => ({
    color: ds.brand('primary')
  }),
  content: () => ({
    fontSize: pxTo(ds.get('type.sizes.2xl'), baseFontSize, 'rem'),
  }),
  cardsIconTopWrapper: () => ({
    backgroundColor: ds.brand('primary'),
    color: ds.brand('white'),
    padding: `${pxTo(80, baseFontSize, 'rem')} 0`
  }),
  illustrationSideWrapper: () =>  ({
    margin: `${pxTo(150, baseFontSize, 'rem')} 0`
  })
}

export default connect(rules)(Home)
