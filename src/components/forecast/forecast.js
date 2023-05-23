import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import './forecast.css';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDate()
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))

    return (
        <>
            {/*The accordion component allows the user to show and hide sections of related content on a page.
            allowZeroExpanded make sure all the opitions are closed */}
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, indx) => (
                    <AccordionItem key={indx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img alt="weather" className='icon-smoll' src={`icons/${item.weather[0].icon}.png`} />
                                    <label className='day'>{forecastDays[indx]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='min-max'>{Math.round(item.main.temp_min)}˚C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-grid'>
                                <div className='daily-details-grid-item'>
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Wind speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>See level</label>
                                    <label>{item.main.see_level} m</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>See level</label>
                                    <label>{Math.round(item.main.feels_like)} ˚C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast;

