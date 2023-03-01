import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import '../../styles/config/normalize.css';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { LandingCard } from '../components/MarketingPages/Cards';
import '../../styles/config/_pm-icons.css';
import Button from '../components/Shared/Button';


const HeroWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.grey_06};
  padding: 48px 80px;
    @media (max-width: 991px) {
        padding: 40px !important;
      }
    .hero-image {
        margin: 0px;
    }
    .img-frame {
        border-radius: ${(props) => props.theme.borderRadius.medium};
        border: 8px solid ${(props) => props.theme.colors.grey_20};// $grey_20
        box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.32);
    }

    .section-image {
      width: 100px;
      height: 100px;
    }

    .container {
      min-height: 400px;
    }
`

const HRStyles = styled.hr`
  border: 0;
  margin-top: 0;
  border-top: 1px solid ${(props) => props.theme.colors.grey_30};
  margin-bottom: 0;
`;


class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Learning Center" slug="/" />
        <div className="container-fluid">
          <HeroWrapper className="row section align-items-center hero">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-6 align-self-center">
                  <h1>Postman Collection Format</h1>
                  <p className="subtitle">
                    Understand the specification behind Postman collections.
                    {' '}
                    <br />
                    Check out the docs and support resources!
                  </p>
                  <Button
                    onClick={() => {
                      navigate("/getting-started/overview/")
                    }} 
                    className="mb-5 secondary"
                  >
                    Explore the Docs
                  </Button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                  <img
                    src="https://voyager.postman.com/illustration/postman-learning-center-documentation-illustration.svg"
                    width="637"
                    height="411"
                    className="hero-image img-fluid"
                    alt="Postmanaut sitting at computer. Illustration."
                  />
                </div>
              </div>
            </div>
          </HeroWrapper>
        </div>
        <div className="container">
          <div className="container-fluid" >
            <HRStyles/>
          </div>

          <section className="row section align-items-center">
            <div className="col-lg-6">
              <br />
              <h2>Model Workflows, Write and Automate Tests, Gain Confidence</h2>
              <p>Collections let you model an end-to-end workflow for your APIs, while still giving you the ability to write scripts, assertions and tests that can be ran anywhere. Tests can be included at different stages in your workflow, giving you more confidence in the APIs you build.</p>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="embed-responsive-16by9 img-frame">
                <img
                  src="https://voyager.postman.com/illustration/personal-workspace-postman-illustration.svg"
                  width="437"
                  height="261"
                  className='hero-image img-fluid'
                />
              </div>
            </div>
          </section>

          <section className="row section align-items-center">
            <div className="col-lg-6 d-flex align-items-center justify-content-center order-2 order-lg-1">
              <div className="embed-responsive-16by9 img-frame">
                <img
                  src="https://voyager.postman.com/illustration/super-admin-postman-illustration.svg"
                  width="437"
                  height="261"
                  className='hero-image img-fluid'
                />
              </div>
            </div>
            <div className="order-1 order-lg-2 col-lg-6">
              <br />
              <h2>Generate Code, Mocks, Documentation, API definitions, and many more</h2>
              <p>Collections are both human and machine readable, and have a suite of tools built around them by Postman and it’s community that let’s you generate client and server-side SDKs, documentation, mocks, convert to and from other API specifications and a lot more.</p>
            </div>
          </section>

          <section className="row section align-items-center">
            <div className="col-lg-6">
              <br />
              <h2>Define and Organize API requests</h2>
              <p>Keep your API requests organized and structured, with related API requests grouped together as folders. Work with an intuitive structure for your requests, define different parameters in your API, declare and reuse variables, save responses, etc</p>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="embed-responsive-16by9 img-frame">
                <img 
                  src="https://voyager.postman.com/illustration/external-libraries-postman-illustration.svg"
                  width="437"
                  height="261"
                  className='hero-image img-fluid'
                />
              </div>
            </div>
          </section>


          <div className="container-fluid" >
            <HRStyles/>
          </div>
          {/* Events Section */}
         
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
