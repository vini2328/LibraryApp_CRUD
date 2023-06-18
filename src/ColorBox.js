export function ColorBox({ color }) {
  const styles = {
    height: "24px",
    width: "148px",
    backgroundColor: color
  };
  return (
    <div style={styles}></div>
  );
}
