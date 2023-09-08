import "./timeline.css";

const Timeline = () => {
  const timelineData = [
    {
      year: "Summer 2023",
      event:
        "I started working on GitHub projects to resume my work with React.",
    },
    {
      year: "Summer 2021",
      event:
        "I became a board member for the Legacy Board at #BeMoreLikeClaire.org, a nonprofit organization established in honor of a cherished individual whose life was tragically cut short due to domestic violence.",
    },
    {
      year: "Fall 2020",
      event:
        "I left Guaranteed Rate to focus on my emotional well-being and healing.",
    },
    {
      year: "Summer 2017",
      event: "I assumed leadership of the Chicago CLJ meetup group.",
    },
    {
      year: "Spring 2017",
      event:
        "I started teaching myself Clojure and used it to rewrite legacy services.",
    },
    {
      year: "Fall 2016",
      event:
        "I joined a new team with a focus on building mobile applications for Loan Officers.",
    },
    {
      year: "Summer 2014",
      event:
        "After gaining more knowledge about the mortgage business, I began developing C# plugins and back-end services centered around loan origination to provide value to Loan Officers.",
    },
    {
      year: "Fall 2012",
      event:
        "I began my employment at Guaranteed Rate as a Software Engineer. I primarily worked on building new features for a PHP realtor website.",
    },
    {
      year: "Summer 2012",
      event:
        "While continuing to work remotely for Whodini, I graduated from DePauw University with a BA in Computer Science.",
    },
    {
      year: "Summer 2011",
      event:
        "I worked as a UX Analyst at a startup called Whodini in the Bay Area.",
    },
  ];

  return (
    <div className="timeline">
      <ul>
        {timelineData.map((item, index) => (
          <li key={index}>
            <div className="year">{item.year}</div>
            <div className="event">{item.event}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
