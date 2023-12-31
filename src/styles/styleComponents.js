import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }

  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;

export const MainContent = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-image: linear-gradient(
    to bottom right,
    #1a1a1a,
    #222222,
    #333333,
    #444444,
    #555555
  );
  background-size: 400% 400%;
  color: #fff;
  width: 100%;
  height: 100%;

  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    20% {
      background-position: 50% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media screen and (max-width: 1320px) {
    flex-basis: 60%;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 50px;
    overflow-x: hidden;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-top: 4rem;
  color: #fff;
  font-weight: bold;
  text-shadow: 0 0 10px #000;
  /* text-shadow: #f4ffcf 1px 0 10px; */
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  fon-family: "Roboto", sans-serif;
`;

export const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  margin-top: 10px;
  padding: 10px 40px;
  border-radius: 30px;
  @media (max-width: 1000px) {
    padding: 20px;
    border-radius: 2rem;
    margin-top: 0px;
  }
`;

export const Loading = styled.p`
  color: gradient;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;

  &::after {
    content: "⏳";
    animation: loading 2s infinite;
  }

  @keyframes loading {
    0% {
      content: "⌛️";
    }
    50% {
      content: "⏳";
    }
    100% {
      content: "⌛️";
    }
  }
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
  font-weight: 600;
  color: #000fs0;
  padding: 0.4rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Input = styled.input`
  border-radius: 0.4rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  color: #000;
  height: 18px;
  margin-top: 10px;
  width: calc(100% - 2rem);
  padding: 0.6rem 0.6rem;
  transition: border-color 0.3s ease-in-out;
  background-color: white;
  &:focus {
    border-color: #007bff;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
    width: calc(100% - 1.7rem);
  }
`;

export const Select = styled.select`
  padding: 0.6rem 0.6rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: calc(100% - 0.6rem);
  height: 150px;
  color: #000;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 5rem;
  border: none;
  font-size: 1.5rem;
  background-color: #ba0f17;
  color: #fff;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s ease-in-out;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &.loading {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ResponseContainer = styled.div`
  display: flex;
  width: 1000px;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 20px;
  opacity: 90%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ResponseTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
`;

export const ResponseText = styled.div`
  width: 80%;
  font-size: 1rem;
  font-weight: normal;
  color: #000;
  border-radius: 0.4rem;
  padding: 1rem;
  margin: 2rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }

  a {
    color: #fff;
    text-decoration: underline;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export const FormBlockGroup = styled.div`
  display: block;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export const LanguageSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const LanguageRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const TopLocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LanguageOption = styled.div`
  display: flex;
  font-size: 1.4rem;
  flex-direction: column;
  align-items: center;
  margin-right: 0.2rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  &.selected {
    border: 1px solid #007bff;
    border-radius: 0.4rem;
  }

  &:hover {
    border-color: #333;
    border-radius: 0.4rem;
  }
`;

export const PinButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 4px;
  font-size: 16px;
  letter-spacing: 0px;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border: 1px solid transparent;

  &::before {
    content: "📍";
    margin-right: 4px;
    left: 8px;
    top: 8px;
  }

  &:hover {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: 16px;
`;

// Button component
export const ActionButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border: 1px solid transparent;
  background: #ba0f17;
  color: white;
`;

export const InterestsContainerNew = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export const InterestItemNew = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  padding: 4px;
  margin-right: 4px;
  margin-bottom: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  border-radius: 0.4rem;

  &:hover {
    border-color: #333;
    border-radius: 0.4rem;
  }

  &.selected {
    border: 1px solid #007bff;
    border-radius: 0.4rem;
  }
`;

export const InterestName = styled.span`
  margin-left: 6px;
  margin-right: 6px;
`;

export const InterestEmoji = styled.span`
  font-size: 16px;
`;

export const Panel = styled.div`
  display: flex;
  flex-basis: 30%;
  z-index: 100;
  opacity: 95%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  top: 0;
  right: 0;
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 0;
  }

  @media (max-height: 500px) {
    margin: 0 auto;
    overflow-y: scroll;
    position: relative;
  }
`;

export const CuisineTypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const CuisineType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  padding: 0.4rem;
  margin-bottom: 30px;
  margin-right: 5px;
  border-radius: 0.4rem;
  border: 1px solid transparent;
  &.selected {
    border: 1px solid #007bff;
    border-radius: 0.4rem;
  }
  &:hover {
    border-color: #333;
    border-radius: 0.4rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

export const Info = styled.div`
  margin: 1rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: #333;
`;

export const InfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #fff;
`;

export const InfoText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #fff;
`;

// Lead form will remove later on

export const LeadForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeadInput = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  border: 2px solid #ccc;
  font-size: 1.2rem;
  width: 20rem;
  margin-bottom: 1rem;
`;

export const LeadButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;
