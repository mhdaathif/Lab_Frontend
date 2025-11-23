import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import authReducer from './slices/authSlice'
// import booksReducer from './slices/booksSlice'
// import bookImageReducer from './slices/bookImageSlice'
// import featuredBooksReducer from './slices/featuredBooksSlice'
// import favouriteReadBooksReducer from './slices/favouriteReadBookSlice'
// import browseBooksReducer from './slices/browseBooksSlice'
// import trendyBooksReducer from './slices/trendyBooksSlice'

const reducer = combineReducers({
    authState: authReducer,
    // booksState: booksReducer,
    // bookImageState: bookImageReducer,
    // featuredBooksState: featuredBooksReducer,
    // favouriteReadBooksState: favouriteReadBooksReducer,
    // browseBooksState: browseBooksReducer,
    // trendyBooksState: trendyBooksReducer,
})

const store = configureStore({
    reducer,
    //middleware:[thunk],
    middleware:(getdefaultMiddleWare)=>getdefaultMiddleWare().concat(thunk),
})

export default store;