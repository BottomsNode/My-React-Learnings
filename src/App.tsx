import { useState } from "react"
import { MyUseContextHook, MyUseEffectHook, MyUseRefHook, MyUseStateHook } from "./components"

function App() {

  const [visibleComponent, setVisibleComponent] = useState("")

  return (
    <>
      <h1 className="bg-gray-500 p-5 text-4xl font-bold text-center">React Learnings</h1>

      <div className="m-2">
        {/* State Button */}
        <button
          className="m-5 border-2 p-2"
          onClick={() => {
            setVisibleComponent("state")
          }}
        >Show Use State Div
        </button>
        {/* Effect Button */}
        <button
          className="m-5 border-2 p-2"
          onClick={() => {
            setVisibleComponent('effect')
          }}
        >Show Use Effect Div
        </button>
        {/* Context Button */}
        <button
          className="m-5 border-2 p-2"
          onClick={() => {
            setVisibleComponent('context')
          }}
        >Show Use Context Div
        </button>
        {/* useRef Button */}
        <button
          className="m-5 border-2 p-2"
          onClick={() => {
            setVisibleComponent('reference')
          }}
        >Show useRef Div
        </button>

        <div style={{ marginTop: '5px', display: "flex", justifyContent: "center" }}>
          {visibleComponent === 'state' && <MyUseStateHook />}
          {visibleComponent === 'effect' && <MyUseEffectHook />}
          {visibleComponent === 'context' && <MyUseContextHook />}
          {visibleComponent === 'reference' && <MyUseRefHook />}
        </div>
      </div>

    </>
  )
}

export default App
