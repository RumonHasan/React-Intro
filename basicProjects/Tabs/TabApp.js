import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './Tab.css';
import {FaAngleDoubleRight} from 'react-icons/fa';

const url = 'https://course-api.netlify.app/api/react-tabs-project';

const TabApp = ()=>{
    const [loading, setLoading] = React.useState(true);
    const [jobs, setJobs] = React.useState([]);
    const [value, setValue] = React.useState(0); // index of the selected job list 

    // fetch jobs 
    const fetchJobs= async ()=>{
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false);
    }
    console.log(jobs);

    // useEffect
    React.useEffect(()=>{
        fetchJobs();
    }, []);

    if(loading){
        return(
            <section className='section loading'>
                <h1>Loading</h1>
            </section>
        );
    }// after the loading the jobs array is filled up

    // getting the categories of the job
    const {company, dates, duties, title} = jobs[value];
    return(
        <section className='section'>
            <div className='title'>
                <h2>Experience</h2>
                <div className='underline'>
                </div>
            </div>
            <div className='jobs-center'>
                {/* button container */}
                <div className='btn-container'>
                    {jobs.map((item, index)=>{
                        return <button key={item.id} onClick={()=>setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>
                            {item.company}
                        </button>
                        {/*If job is the selected job then adds an additional active class in order to keep it selected */}
                    })}
                </div>
                {}
                <article className='job-info'>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className='job-date'>{dates}</p>
                    {duties.map((duty, index)=>{
                        return <div className='job-desc' key={index}>
                            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                            <p>{duty}</p>
                        </div>
                    })}
                </article>
            </div>
        </section>
    );
}

export default TabApp;