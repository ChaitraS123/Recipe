import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Untagged = () => {
    const [untagged, setUntagged] = useState([])
    useEffect(() => {
        axios.get('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?is_untagged=true')
            .then((response) => {
                const result = response.data.results
                setUntagged(result)
            })
    }, [])


    return (
        <div>
            <table className="table table-hover table-striped " style={{ marginTop: '20px' }}>
                <thead className="table-primary">
                    <tr>
                        <th>Name</th>
                        <th>Last Updated</th>
                        <th>Cogs%</th>
                        <th>Cost price</th>
                        <th>Sale price</th>
                        <th>Gross margin</th>
                        <th>Tags/action</th>
                    </tr>
                </thead>
                <tbody>
                    {untagged.map((el) => {
                        return <tr key={el.id}>

                            <td>{el.name}</td>
                            <td>{el.last_updated.date.split(' ')[0]}</td>
                            <td>{el.cogs}</td>
                            <td>{Math.round(el.cost_price).toFixed(2)}</td>
                            <td>{Math.round(el.sale_price).toFixed(2)}</td>
                            <td>{Math.round(el.gross_margin)}%</td>
                            <td >Indian Mart</td>

                        </tr>
                    })}

                </tbody>
            </table>

        </div>
    )
}
export default Untagged