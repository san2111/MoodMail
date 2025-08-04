import MoodInput from '@/components/MoodInput'
import MoodOutput from '@/components/MoodOutput';
import { useState } from 'react'

const Home = () => {

    const [mood, setMood] = useState('');
    const [subject, setSubject] = useState('');
    const [footer, setFooter] = useState('');
    const [generated, setGenerated] = useState(false);

    const handleGenerate = () => {
        const lowerMood = mood.toLowerCase();
        if (lowerMood.includes('happy')) {
            setSubject('Feeling Great!');
            setFooter('Keep smiling :)');
        } else if (lowerMood.includes('sad')) {
            setSubject('It\'s Okay to Feel Sad');
            setFooter('Sending you virtual hugs 🤗');
        } else if (lowerMood.includes('angry')) {
            setSubject('Let\'s Calm Down Together');
            setFooter('Take a deep breath 🌬️');
        } else {
            setSubject('Your Daily Dose of Positivity');
            setFooter('Stay positive! 🌟');
        }

        setGenerated(true);
    }

    const handleReset = () => {
        setMood('');
        setSubject('');
        setFooter('');
        setGenerated(false);
    }



    return (
        <div className='max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-sm bg-white space-y-6'>
            <h2 className='text-2xl font-bold text-gray-800' >MoodMail Generator</h2>

            {!generated ? (<MoodInput mood={mood} setMood={setMood}
                onGenerate={handleGenerate}
                disabled={generated}
            />) : (<MoodOutput subject={subject} footer={footer} onReset={handleReset} />)}

        </div>
    )
}

export default Home
