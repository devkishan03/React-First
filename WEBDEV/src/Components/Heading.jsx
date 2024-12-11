const heading_style = {
  //inline css done with obj passing
  textAlign: "center",
  fontSize: "2.5rem",
  backgroundColor: "lightGray",
  fontWeight: "bold",
};
export const Heading = () => {
  return (
    <h1 style={heading_style}>
      Top <span style={{ color: "red" }}>Netflix</span> Movie Series
    </h1>
  );
};
