import { useState } from 'react'
import './CreateCrew.css'
import {supabase} from '../client'

const CreateCrew = () => {

    const [crew, setCrew] = useState({name: "", power: "", color: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setCrew( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCrew = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmates')
            .insert({name: crew.name, power: crew.power, color: crew.color})
            .select();

        window.location = "/";
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
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

                <label>Color</label><br />
                <div className="radio-group">
                <label>
                    <input
                    type="radio"
                    name="color"
                    value="red"
                    checked={crew.color === 'red'}
                    onChange={handleChange}
                    />
                    Red
                </label>
                <label>
                    <input
                    type="radio"
                    name="color"
                    value="blue"
                    checked={crew.color === 'blue'}
                    onChange={handleChange}
                    />
                    Blue
                </label>
                <label>
                    <input
                    type="radio"
                    name="color"
                    value="green"
                    checked={crew.color === 'green'}
                    onChange={handleChange}
                    />
                    Green
                </label>
                <label>
                    <input
                    type="radio"
                    name="color"
                    value="yellow"
                    checked={crew.color === 'yellow'}
                    onChange={handleChange}
                    />
                    Yellow
                </label>
                </div>
                <input type="submit" value="Submit" onClick={createCrew} />
            </form>
        </div>
    )
}

export default CreateCrew