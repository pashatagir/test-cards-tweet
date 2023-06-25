import { BtnFilter, ButtonFollows } from 'components/Style/Style.styled';

export const LoadMoreBtn = ({ onClick }) => (
  <ButtonFollows
    type="button"
    onClick={onClick}
    style={{
      backgroundColor: '#5CD3A8',
    }}
  >
    Load more
  </ButtonFollows>
);

export const ButtonFilter = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <BtnFilter type={type} {...otherProps}>
      {children}
    </BtnFilter>
  );
};
