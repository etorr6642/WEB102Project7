import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './EditCrew.css'
import {supabase} from '../client'

const EditCrew = ({data}) => {

    const {id} = useParams()
    const [crew, setCrew] = useState({id: null, name: "", power: "", color: ""})

    // 🔹 Load data from Supabase
        useEffect(() => {
            const fetchCrew = async () => {
            const { data, error } = await supabase
                .from('crewmates')
                .select()
                .eq('id', id)
                .single(); // since we're fetching one record

            if (data) {
                setCrew(data);
            } else {
                console.error("Error fetching crew:", error);
            }
            };

            fetchCrew();
        }, [id]);

    const handleChange = (event) => {
        const {name, value} = event.target
        setCrew( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updateCrew = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmates')
            .update({ name: crew.name, power: crew.power,  color: crew.color})
            .eq('id', id);

        window.location = "/";
    }

   const deleteCrew = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmates')
            .delete()
            .eq('id', id); 

        window.location = "/";
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={crew.name} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="power">Power</label><br />
                <select id="power" name="power" value={crew.power} onChange={handleChange}>
                    <option value="">Select Power</option>
                    <option value="strength">Strength</option>
                    <option value="speed">Speed</option>
                    <option value="intelligence">Intelligence</option>
                    <option value="stealth">Stealth</option>
                </select>
                <br /><br />

                <label htmlFor="color">Color</label><br />
                <select id="color" name="color" value={crew.color} onChange={handleChange}>
                    <option value="">Select Color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </select>
                <br />

                <br/>
                <input type="submit" value="Submit" onClick ={updateCrew}/>
                <button className="deleteButton" onClick={deleteCrew}>Delete</button>
            </form>
        </div>
    )
}

export default EditCrew