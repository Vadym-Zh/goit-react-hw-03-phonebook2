import PropTypes from 'prop-types';

import {
  PhonebookSection,
  PhonebookContainer,
  TitleContainer,
  Title,
} from './Section.styled';

export const Section = ({ title, children, headerContent }) => {
  return (
    <PhonebookSection>
      <PhonebookContainer>
        <TitleContainer>
          <Title>{title}</Title>
          {headerContent}
        </TitleContainer>
        {children}
      </PhonebookContainer>
    </PhonebookSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  headerContent: PropTypes.object,
};
