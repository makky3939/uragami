// const getRandomNumber = function() {
//   return Math.floor(Math.random() * 255)
// }

export const VirtualScrollCard = ({
  posX,
  posY,
  colorR,
  colorG,
  colorB,
}: {
  posX: Number;
  posY: Number;
  colorR: Number;
  colorG: Number;
  colorB: Number;
}) => {
  return (
    <div className="card mb-2" style={{ border: 0 }}>
      <div
        className="card-body rounded"
        style={{
          background: `rgb(${colorR}, ${colorG}, ${colorB})`,
        }}
      >
        {`pos=(${posY}, ${posX})`}
        <br />
        {`rgb=(${colorR}, ${colorG}, ${colorB})`}
      </div>
    </div>
  );
};
