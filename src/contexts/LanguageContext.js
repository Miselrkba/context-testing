import React, { Component, createContext } from 'react'

export const LanguageContext = createContext();

export class LanguageProvider extends Component {

    state = {
        language: 'german'
    }

    render() {
        return (
            <div>
             <LanguageContext.Provider value={{...this.state}} >
                 {this.props.children}
                 </LanguageContext.Provider>   
            </div>
        )
    }
}
