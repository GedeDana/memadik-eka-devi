import React from "react";

const ScrollYContext = React.createContext();

export const ScrollYProvider = ScrollYContext.Provider;
export const ScrollYConsumer = ScrollYConsumer.Consumer;

export default ScrollYContext;