import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import SEO from '../components/seo/index';
import MainLayout from '../components/main-layout/index';

const ProjectPage = ({ data }): JSX.Element => {
  const ProjectContainer = styled.div`
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 45%);
    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fill, 90%);
    }
  `;
  const StyledCard = styled.div`
    font-size: 1rem;
    transition: all 1000ms;
    overflow: hidden;
    border-color: #212121;
    @media (max-width: 992px) {
      font-size: 0.81rem;
    }
  `;
  const Title = styled.h1`
    font-size: 1.2rem;
    @media (max-width: 992px) {
      font-size: 1rem;
    }
  `;
  const Date = styled.p`
    text-align: right;
  `;
  const fullWidth = css({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  });
  const flexCol = css({
    width: '49%',
  });
  return (
    <MainLayout>
      <SEO
        title="Projects"
        description="Tyler Campbell's Software Development Projects"
      />
      <ProjectContainer>
        {data.allMarkdownRemark.edges
          .filter((post) => post.node.frontmatter.category === 'project')
          .map((post) => (
            <Link to={post.node.frontmatter.path}>
              <StyledCard key={post.node.id}>
                <div css={fullWidth}>
                  <div css={flexCol}>
                    <Title>{post.node.frontmatter.title}</Title>
                  </div>
                  <div css={flexCol}>
                    <Date>{post.node.frontmatter.published}</Date>
                  </div>
                </div>
              </StyledCard>
            </Link>
          ))}
      </ProjectContainer>
    </MainLayout>
  );
};
export const pageQuery = graphql`
  query ProjectIndexQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            path
            category
            title
            date
            published
            author
            image
          }
        }
      }
    }
  }
`;
export default ProjectPage;
