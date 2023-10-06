const Badges = ({ list, title, color }) => {
  console.log(list);
  return (
    <div>
      <h6>{title}</h6>

      {list.map((item) => (
        <p className={`badge ${color} me-2 mb-3`}>{item.name}</p>
      ))}
    </div>
  );
};

export default Badges;
