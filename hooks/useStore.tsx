import { View, Text } from 'react-native'
import React from 'react'
import { rootContext } from '../store'
import { enableLogging } from 'mobx-logger';
enableLogging()
export const useStore = () => React.useContext(rootContext);