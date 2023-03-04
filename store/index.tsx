import React from 'react'
import { RootStore } from './RootStroe'
export const rootContext=React.createContext({
    rootStore:new RootStore()
})