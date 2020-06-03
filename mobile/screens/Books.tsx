import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {FinishedReading} from "./FinishedReading";
import {ToBeRead} from "./Tbr";

const Tab = createMaterialTopTabNavigator();

export function Books() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Finished Reading" component={FinishedReading} />
            <Tab.Screen name="To Be Read" component={ToBeRead} />
        </Tab.Navigator>
    );
}