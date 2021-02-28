import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Recipes = () => {
    const [recipes1, setRecipes1] = useState([])
    const [recipes2, setRecipes2] = useState([])
    const [status, setStatus] = useState(false)
    useEffect(() => {
        axios.get('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=1')
            .then((response) => {
                const result = response.data.results
                console.log(result)
                setRecipes1(result)

            })
    }, [])
    useEffect(() => {
        axios.get('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=2')
            .then((response) => {

                const result = response.data.results
                setRecipes2(result)
            })
    }, [])
    const handlecheckboxChange = (e) => {
        console.log(e.target.checked)
        setStatus(e.target.checked)
    }
    return (
        <div>


            <table className="table table-hover table-striped " style={{ marginTop: '20px' }}>
                <thead className="table-primary">

                    <tr>
                        <th><input type="checkbox" checked={status} onChange={handlecheckboxChange} /></th>
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

                    {recipes1.map((el) => {
                        return <tr key={el.id}>
                            <td><input type="checkbox" checked={status} /></td>
                            <td>{el.name}</td>
                            <td>{el.last_updated.date.split(' ')[0]}</td>
                            <td>{el.cogs}</td>
                            <td>{Math.floor(el.cost_price).toFixed(2)}</td>
                            <td>{Math.floor(el.sale_price).toFixed(2)}</td>
                            <td>{Math.floor(el.gross_margin)}%</td>
                            <td >Indian Mart</td>

                        </tr>
                    })}
                    {recipes2.map((el) => {
                        return <tr key={el.id}>
                            <td><input type="checkbox" checked={status} /></td>
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
export default Recipes