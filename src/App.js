import styled from 'styled-components';
import Wrapper from './ThePerfectButton';

const StyledButton = styled(Wrapper)`
      margin-bottom: 1rem;
      min-width: 208px;

      &:last-child {
            margin: 0;
      }
`;

function App() {
      return (
            <>
                  <StyledButton>Primary</StyledButton>
                  <StyledButton isLoading>Loading</StyledButton>
                  <StyledButton isCompleted>
                        <span className="material-icons" style={{ marginRight: '8px' }}>
                              verified
                        </span>
                        Loaded
                  </StyledButton>
                  <StyledButton disabled>Disabled</StyledButton>
            </>
      );
}

export default App;
