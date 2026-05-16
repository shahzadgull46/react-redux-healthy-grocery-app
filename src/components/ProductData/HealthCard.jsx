const HealthCard = ({ sections, openIndex, handleClick }) => {
  if (!sections || sections.length === 0) return <p>Loading...</p>;

  // helper function
  const renderObjectData = (data) => (
    <div>
      {Object.entries(data || {}).map(([key, value]) => (
        <div
          key={key}
          className="font-bold p-4 my-4 mx-10 bg-slate-100 rounded-lg "
        >
          <p>
            <b>{key}:</b> {value}
          </p>
        </div>
      ))}
    </div>
  );

  const renderSectionData = (section) => {
    if (section.key === "nutrition") {
      return renderObjectData(section.data);
      
    }

    if (section.key === "safety") {
      return renderObjectData(section.data);
    }

    if (section.key === "environment") {
      return renderObjectData(section.data);
    }

    if (section.key === "diet") {
      return (
        <div>
          <p>
            <b>Vegan:</b> {section.data?.vegan ? "Yes" : "No"}
          </p>
          <p>
            <b>Vegetarian:</b> {section.data?.vegetarian ? "Yes" : "No"}
          </p>
        </div>
      );
    }

    return <p>No data</p>;
  };
  return (
    <div>
      <h1 className="text-4xl font-bold p-4 my-3.5 mx-46">Health</h1>

      {sections.map((section, index) => (
        <div
          key={index}
          className="font-bold p-4 my-4 mx-10 text-2xl bg-slate-100 rounded-lg cursor-pointer"
          onClick={() => handleClick(index)}
        >
          <div className="flex justify-between cursor-pointer">
            <span>{section.title}</span>
            <span className="flex justify-between"> ⇓</span>
          </div>
          <div className="  mx-10 text-lg ">
            {openIndex === index && <div>{renderSectionData(section)}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthCard;
