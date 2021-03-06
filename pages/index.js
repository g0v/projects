import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import data from './data.json';
// https://cdnjs.cloudflare.com/ajax/libs/antd/3.7.0/antd.min.css

const Wrapper = styled.div`
  max-width: 62rem;
  margin: 0 auto 13.19rem auto;
  flex-grow: 1;

  @media (max-width: 66rem){
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Button = styled.a`
  display: block;
  padding: 1rem;
  background-color: #A93325;
  border-radius: 3px;
  color: #FFFFFF;
  margin-left: auto;
  margin-right: auto;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  &:hover {
    color: white;
    background-color: #B04332;
  }
  &:active {
    color: white;
    background-color: #803124;
  }
`;

class Index extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        {_.map(data, ({
          title, slack, description, website, document, github,
        }) => (
          <div className="box">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{title}</strong> <small>@{slack} (g0v slack)</small>
                    <br />
                    {_.map(description, text => (<p>{text}</p>))}
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left">
                    {_.map(website, item => (
                      <a className="level-item" aria-label="reply" href={item} target="g0v">
                        <span className="icon is-small">
                          <i className="fas fa-link" aria-hidden="true" />
                        </span>
                      </a>
                    ))}
                    {_.map(document, item => (
                      <a className="level-item" aria-label="retweet" href={item} target="g0v">
                        <span className="icon is-small">
                          <i className="fas fa-book" aria-hidden="true" />
                        </span>
                      </a>
                    ))}
                    {_.map(github, item => (
                      <a className="level-item" aria-label="like" href={item} target="g0v">
                        <span className="icon is-small">
                          <i className="fab fa-github" aria-hidden="true" />
                        </span>
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </article>
          </div>
        ))}
        <Button title="Click to join g0v on Slack" href="http://join.g0v.today/">Join g0v on Slack</Button>
      </Wrapper>
    );
  }
}

export default Index;
