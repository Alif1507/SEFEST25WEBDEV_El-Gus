import styled from 'styled-components';

const Button = ({Children}) => {
  return (
    <StyledWrapper>
      <button className='cursor-pointer'> {Children}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
   padding: 15px 25px;
   border: unset;
   border-radius: 15px;
   color: #ffffff;
   z-index: 1;
   background: #119586;
   position: relative;
   font-weight: 1000;
   font-size: 17px;
   -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
   box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
   transition: all 250ms;
   overflow: hidden;
  }

  button::before {
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 0;
   border-radius: 15px;
   background-color: #3498DB;
   z-index: -1;
   -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
   box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
   transition: all 250ms
  }

  button:hover {
   color: #e8e8e8;
  }

  button:hover::before {
   width: 100%;
  }`;

export default Button;
