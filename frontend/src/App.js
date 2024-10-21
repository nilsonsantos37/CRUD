import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import { toast, toastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width:100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  return (
    <>
      <Container>
        <Title>USUÁRIO</Title>
      </Container>
      <toastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle/>
    </>
  );
}

export default App;
