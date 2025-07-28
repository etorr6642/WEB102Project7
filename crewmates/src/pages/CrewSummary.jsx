import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';
import speedImg from '../assets/speed.webp';
import strengthImg from '../assets/strength.webp';
import intelligenceImg from '../assets/intelligence.webp';
import stealthImg from '../assets/stealth.webp';

const CrewSummary = () => {
  const { id } = useParams();
  const [crew, setCrew] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrew = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('crewmates')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        console.error(error);
      } else {
        setCrew(data);
      }
      setLoading(false);
    };

    if (id) fetchCrew();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!crew) return <p>No crew member found.</p>;

  const powerImages = {
    strength: strengthImg,
    speed: speedImg,
    intelligence: intelligenceImg,
    stealth: stealthImg,
  };

  const powerImage = powerImages[crew.power?.toLowerCase()];

    const colorDescriptions = {
    red: "fiery and fearless, always charging into the unknown.",
    blue: "calm and strategic, thinking before acting.",
    green: "loyal and balanced, always keeping the team grounded.",
    yellow: "bright and energetic, with a spark of unpredictability.",
    purple: "mysterious and wise, walking the edge between light and shadow.",
    black: "stealthy and silent, a shadow in motion.",
    white: "pure-hearted and inspiring, a beacon to their allies.",
    pink: "cheerful and creative, bringing energy to every mission.",
    orange: "bold and brash, always ready to shake things up."
    };
    const powerDescriptions = {
    speed: "unmatched speed and reflexes",
    strength: "immense strength and resilience",
    intelligence: "a brilliant tactical mind",
    stealth: "mastery of stealth and subterfuge"
    };

    const colorDesc = colorDescriptions[crew.color?.toLowerCase()] || "";
    const powerDesc = powerDescriptions[crew.power?.toLowerCase()] || "a unique ability";

    const summarySentence = `${crew.name} is a ${crew.color?.toLowerCase()} crewmate known for ${colorDesc} With ${powerDesc}, they are a vital part of the crew.`;

  return (
    <div className={`Card ${crew.color?.toLowerCase()}`}>
      <div className="powerContainer">
        {powerImage && (
          <img
            src={powerImage}
            alt={crew.power + ' icon'}
            className="powerImage"
          />
        )}
      </div>

      <h2 className="name">{crew.name}</h2>
      <h3 className="power">Power: {crew.power}</h3>
      <p className="color">Color: {crew.color}</p>
      <p className="summary">{summarySentence}</p>

      <Link to={`/edit/${crew.id}`}>
        <button>Edit Crewmate</button>
      </Link>
      <Link to="/">
        <button>Back to Crew List</button>
      </Link>
    </div>
  );
};

export default CrewSummary;