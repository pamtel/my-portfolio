import React, {useState} from 'react'
import Categories from '../Components/Categories'
import MenuItems from '../Components/MenuItems'
import Tittle from '../Components/Tittle'
import portfolios from '../Components/allPortfolios'

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function Portfolios() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        if(category === 'All'){
            setCategories(allCategories)
            setMenuItems(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData)
    }
    return (
        <div className="PortfolioPage">
            <Tittle title={'Portfolios'} span={'Portfolios'}/>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems}/>
            </div>
        </div>
    )
}

export default Portfolios
