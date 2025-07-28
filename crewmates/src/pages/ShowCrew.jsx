import { useState, useEffect } from 'react'
import Card from '../components/Card'
import {supabase} from '../client'
import './ShowCrew.css'

const ShowCrew = (props) => {

    const [crew, setCrew] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
                .from('crewmates')
                .select()
                .order('created_at', { ascending: false });

            // set state of posts
            setCrew(data)
        }
        fetchPosts();
    }, [props])

    
    
    return (
        <div className="ShowCrew">
            {
                crew && crew.length > 0 ?
                [...crew]
        
                .map((c,index) => 
                    <Card 
                        key={c.id}
                        id={c.id} 
                        name={c.name}
                        power={c.power}
                        color={c.color}
                    />
                ) : <h2>{'No Crew Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ShowCrew