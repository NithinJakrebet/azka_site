import {
  NameTypography,
  PositionTypography,
  BioTypography,
} from "../styles";

const MemberInfo = ({ name, position, bio }) => {
  return (

    <>
      <NameTypography variant="h3" component="h2" gutterBottom>
        {name}
      </NameTypography>
      <PositionTypography variant="h5" color="text.secondary">
        {position}
      </PositionTypography>
      <BioTypography variant="body1">{bio}</BioTypography>
    </>
  );
};

export default MemberInfo;