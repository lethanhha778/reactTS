import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/configStore'
import { getProductAPI, ProductModel } from '../../redux/reducers/productReducer'


type Props = {}

// đối tượng props
export default function Home(props: Props) {
    const { arrProduct } = useSelector((state: RootState) => state.productReducer)
    const dispacth: AppDispatch = useDispatch()

    useEffect(() => {
        let action = getProductAPI();
        dispacth(action);
    }, [])

    const renderProduct = () => {
        return arrProduct.map((product: ProductModel, index: number) => {
            return <div className='col-4' key={product.id}>
                <div className="card">
                    <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
        })
    }
    return (
        <div className='container'>
            <h4 className='text-center'>Shoes Shop</h4>
            <div className='row'>
                {renderProduct()}
            </div>
        </div>
    )
}