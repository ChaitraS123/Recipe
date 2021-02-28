import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Margin = () => {
    const [margintop, setMarginTop] = useState([])
    const [marginbottom, setMarginBottom] = useState([])
    const [fluctuation, setFluctuation] = useState([])
    useEffect(() => {
        axios.get('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=top')
            .then((response) => {
                setMarginTop(response.data.results)
            })
    }, [])
    useEffect(() => {
        axios.get('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=bottom')
            .then((response) => {
                setMarginBottom(response.data.results)
            })
    }, [])
    useEffect(() => {
        axios.get('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/fluctuation-group/?order=top')
            .then((response) => {
                setFluctuation(response.data.results)
            })

    }, [])



    return (
        <div>
            <div className="row" >
                {margintop.length > 0 &&
                    <div className="col-md-4" style={{ marginTop: '10px' }} >
                        <div className="card " style={{ width: '100%', height: '100%' }}>
                            <h5 className="card-header" style={{ textAlign: 'center' }}>High Margin Recipes</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p>{margintop[0].name}</p>
                                        < div style={{ width: '70px', marginTop: '10px' }}>
                                            <CircularProgressbar styles={buildStyles({ pathColor: 'green', trailColor: '#d6d6d6', textColor: 'green' })} value={margintop[0].margin} text={`${margintop[0].margin}%`} />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>{margintop[1].name}</p>
                                        <div style={{ width: '70px', marginTop: '40px' }}>
                                            <CircularProgressbar styles={buildStyles({ pathColor: 'green', trailColor: '#d6d6d6', textColor: 'green' })} value={margintop[1].margin} text={`${margintop[1].margin}%`} />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>{margintop[2].name}</p>
                                        <div style={{ width: '70px' }}>
                                            <CircularProgressbar styles={buildStyles({ pathColor: 'green', trailColor: '#d6d6d6', textColor: 'green' })} value={margintop[2].margin} text={`${margintop[2].margin}%`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {marginbottom.length > 0 && <div className="col-md-4" style={{ marginTop: '10px' }}>
                    <div className="card " style={{ width: '100%', height: '100%' }}>
                        <h5 className="card-header" style={{ textAlign: 'center' }}>Low margin Recipes</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <p>{marginbottom[0].name}</p>
                                    < div style={{ width: '70px', marginTop: '60px' }}>
                                        <CircularProgressbar styles={buildStyles({ pathColor: 'red', trailColor: '#d6d6d6', textColor: 'red', textSize: '16px' })} value={marginbottom[0].margin} text={`${marginbottom[0].margin}%`} />
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <p>{marginbottom[1].name}</p>
                                    < div style={{ width: '70px', marginTop: '60px' }}>
                                        <CircularProgressbar styles={buildStyles({ pathColor: 'red', trailColor: '#d6d6d6', textColor: 'red', textSize: '16px' })} value={marginbottom[1].margin} text={`${marginbottom[1].margin}%`} />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <p>{marginbottom[2].name}</p>

                                    < div style={{ width: '70px', marginTop: '60px', textAlign: 'center' }}>
                                        <CircularProgressbar styles={buildStyles({ pathColor: 'red', trailColor: '#d6d6d6', textColor: 'red', textSize: '16px' })} value={marginbottom[2].margin} text={`${marginbottom[2].margin}%`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
                {fluctuation.length > 0 && <div className="col-md-4" style={{ marginTop: '10px' }}>
                    <div className="card" style={{ width: '100%', height: '100%' }}>
                        <h5 className="card-header" style={{ textAlign: 'center' }}>Top fluctuating recipes</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <p>{fluctuation[0].name}</p>
                                    <h4 style={{ marginTop: '50px' }}>{fluctuation[0].fluctuation}%</h4>



                                </div>
                                <div className="col-sm-4">
                                    <p>{fluctuation[1].name}</p>
                                    <h4 style={{ marginTop: '70px' }}>{fluctuation[1].fluctuation}%</h4>

                                </div>
                                <div className="col-sm-4">
                                    <p>{fluctuation[2].name}</p>
                                    <h4 style={{ marginTop: '20px' }}>{fluctuation[2].fluctuation}%</h4>


                                </div>



                            </div>


                        </div>

                    </div>

                </div>}




            </div>

        </div >
    )
}
export default Margin