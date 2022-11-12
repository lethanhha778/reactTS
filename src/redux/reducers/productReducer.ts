import { URL_API } from './../../util/seting';
import { AppDispatch } from './../configStore';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

// tạo interface ProductModel

export interface ProductModel {
    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: string;
    relatedProducts: string;
    feature: boolean;
    image: string;
}
const initialState :any= {
    arrProduct: []
}
// rxslice
export const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getProductListAction: (state, action: PayloadAction<ProductModel[]>) => {
            state.arrProduct = action.payload
        },
    }
    // PayloadAction : generic
});


export const { getProductListAction } = productReducer.actions

export default productReducer.reducer

// Action API
export const getProductAPI = () => {
    // kiểu dữ liệu của hàm dispatch (dispatch2 của redux thunk)
    return (dispatch: AppDispatch) => {
        axios({
            method: 'get',
            url: `${URL_API}/product`,
        })
            .then((res) => {
                console.log(res.data);
                let arrProduct: ProductModel[] = res.data.content

                const action = getProductListAction(arrProduct)

                dispatch(action)
            })
            .catch((err) => {
                console.log(err);
            })
    }
}