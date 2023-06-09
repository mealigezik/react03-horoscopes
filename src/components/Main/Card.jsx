// import

const Card = (data) => {
  console.log("ne gelir", data);
  return (
    <div className="cards">
      <div className="title">
        <h1>{data.title}</h1>
      </div>
      <div className="date">
        <h6>{data.date}</h6>
      </div>
      <img src={data.image} alt={data.title} />
      <div className="card-over">
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default Card;
